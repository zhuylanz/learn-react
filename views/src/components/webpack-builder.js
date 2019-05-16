const webpack = require("webpack");
const path = require("path");

const options = {
	mode: "development",
	entry: "./Component.entry.jsx",
	output: {
		path: __dirname,
		filename: "testWebpack.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/react"]
				}
			}
		]
	}
};

webpack(options, (err, stats) => {
	console.log("stats", stats.hasErrors());
});
