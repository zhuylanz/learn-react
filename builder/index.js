require("@babel/register")({
	presets: ["@babel/react"]
});

var express = require("express");
var app = express();
var React = require("react");
var ReactDOMServer = require("react-dom/server");
// var Component = require("../pages/single");
var Component = require("./Component");

app.use(express.static(__dirname));

app.get("/", function(request, response) {
	var html = ReactDOMServer.renderToString(React.createElement(Component));
	response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
	console.log("http://localhost:" + PORT);
});


buildHandlebarPages();

function buildHandlebarPages() {
	const pagePaths = getPagePaths();
	bundlePages(pagePaths);

	const pageHTMLs = renderHtml(pagePaths);
	injectHTMLsToTemplates(pageHTMLs);
}

function injectHTMLsToTemplates(pageHTMLs) {

}