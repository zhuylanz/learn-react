var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "public");
var APP_DIR = path.resolve(__dirname, "views/components");

var config = {
	entry: APP_DIR + "/index.js",
	output: {
		path: BUILD_DIR,
		filename: "bundle.js"
	}
};

module.exports = config;
