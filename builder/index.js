require("@babel/register")({
	ignore: [/node_modules/],
	presets: ["@babel/preset-react"]
});

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

removeOldFiles();
buildHandlebarPages();

function removeOldFiles() {
	removeHandlebarPages();
	removeJsFiles();

	function removeHandlebarPages() {
		const handlebarPaths = getHandlebarPaths();
		for (let handlebarPath of handlebarPaths) {
			fs.unlinkSync(handlebarPath);
		}
	}

	function removeJsFiles() {
		const jsPaths = getJsPaths();
		for (let jsPath of jsPaths) {
			fs.unlinkSync(jsPath);
		}
	}
}

function buildHandlebarPages() {
	const pagePaths = getPagePaths();
	bundlePages(pagePaths);
	const pageObjs = renderHTML(pagePaths);
	injectHTMLsToTemplates(pageObjs);
}

function getPagePaths() {
	const pageDir = path.resolve(
		__dirname,
		process.env.BUILDER_PAGE_DIR || "./src/pages"
	);
	const filenames = fs.readdirSync(pageDir);

	let pagePaths = [];
	for (let filename of filenames) {
		pagePaths.push(`${pageDir}/${filename}`);
	}

	return pagePaths;
}

async function bundlePages(pagePaths) {
	const entryPaths = genEntryFiles(pagePaths);
	await bundleEntryFiles(entryPaths);
	removeEntryFiles(entryPaths);

	function genEntryFiles(pagePaths) {
		let entryPaths = [];
		for (let pagePath of pagePaths) {
			const entryPath = pagePath.replace(".js", ".entry.js");
			fs.writeFileSync(entryPath, genEntryContent(entryPath));
			entryPaths.push(entryPath);
		}

		return entryPaths;

		function genEntryContent(entryPath) {
			const pageName = extractNameFromEntryPath(entryPath);
			const entryFileContent = `const React = require("react");
			const ReactDOM = require("react-dom");
			const Component = require("./${pageName}");
			ReactDOM.hydrate(React.createElement(Component), document.getElementById('root'));`;

			return entryFileContent;
		}
	}

	function bundleEntryFiles(entryPaths) {
		return new Promise((resolve, reject) => {
			const packMode = process.env.NODE_ENV || "development";
			const outputPath = path.resolve(
				__dirname,
				process.env.BUILDER_WEBPACK_OUTPUT || "../public/reactjs"
			);
			const packOptions = {
				mode: packMode,
				entry: "",
				output: {
					path: outputPath,
					filename: ""
				},
				module: {
					rules: [
						{
							test: /\.jsx?$/,
							exclude: /node_modules/,
							loader: "babel-loader",
							options: {
								presets: ["@babel/preset-react"]
							}
						}
					]
				}
			};

			for (let entryPath of entryPaths) {
				const outputFileName = extractNameFromEntryPath(entryPath);

				if (outputFileName) {
					const options = { ...packOptions };
					options.entry = entryPath;
					options.output.filename = outputFileName;

					console.log(options);
					webpack(options, (err, stats) => {
						if (err || stats.hasErrors()) {
							reject(stats);
						}
						resolve();
					});
				}
			}
		});
	}

	function extractNameFromEntryPath(entryPath) {
		const aMatch = entryPath.match(/\/\w+\.entry\.js/);
		if (aMatch) {
			return aMatch[0].slice(1, -9) + ".js";
		}
	}

	function removeEntryFiles(entryPaths) {
		for (let entryPath of entryPaths) {
			fs.unlinkSync(entryPath);
		}
	}
}

function renderHTML(pagePaths) {
	let pageObjs = [];
	for (let pagePath of pagePaths) {
		const Page = require(pagePath);
		const name = extractNameFromPagePath(pagePath);

		const html = ReactDOMServer.renderToString(React.createElement(Page));
		pageObjs.push({ name, html });
	}

	return pageObjs;
}

function extractNameFromPagePath(pagePath) {
	const aMatch = pagePath.match(/\/\w+\.js$/);
	if (aMatch) {
		return aMatch[0].slice(1, -3);
	}
}

function injectHTMLsToTemplates(pageObjs) {
	const handlebarDir = getHandlebarDir();

	for (let pageObj of pageObjs) {
		const handlebarPath = `${handlebarDir}/${pageObj.name}.handlebars`;
		const handlebarContent = `<div id="root">${
			pageObj.html
		}</div><script src="/reactjs/${pageObj.name}.js"></script>`;

		fs.writeFileSync(handlebarPath, handlebarContent);
	}
}

function getHandlebarPaths() {
	const handlebarDir = getHandlebarDir();
	const filenames = fs.readdirSync(handlebarDir);

	let handlebarPaths = [];
	for (let filename of filenames) {
		const handlebarPath = `${handlebarDir}/${filename}`;
		if (!fs.lstatSync(handlebarPath).isDirectory()) {
			handlebarPaths.push(handlebarPath);
		}
	}

	return handlebarPaths;
}

function getJsPaths() {
	const jsDir = getJsDir();
	const filenames = fs.readdirSync(jsDir);

	let jsPaths = [];
	for (let filename of filenames) {
		const jsPath = `${jsDir}/${filename}`;
		if (!fs.lstatSync(jsPath).isDirectory()) {
			jsPaths.push(jsPath);
		}
	}

	return jsPaths;
}

function getHandlebarDir() {
	return path.resolve(
		__dirname,
		process.env.BUILDER_HANDLEBAR_DIR || "../views"
	);
}

function getJsDir() {
	return path.resolve(
		__dirname,
		process.env.BUILDER_JS_DIR || "../public/reactjs"
	);
}
