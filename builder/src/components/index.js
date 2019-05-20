require("@babel/register")({
	ignore: [/node_modules/],
	presets: ["@babel/preset-react"]
});

var express = require("express");
var app = express();
var React = require("react");
var ReactDOMServer = require("react-dom/server");
// var Component = require("./Component");
// var Component = require("./single");
var Component = require("../pages/testClock");

app.use(express.static(__dirname));
app.use(express.static("/home/zhuylanz/tmp/learn-react/public"));

app.get("/", function(request, response) {
	var html =
		ReactDOMServer.renderToString(React.createElement(Component)) +
		'<script src="/reactjs/testClock.js" ></script>';
	response.send(html);
	// response.send(`<html>
	// <head>
	// <script src="/single.js" ></script>
	// </head>

	// </html>`);
});

var PORT = 3000;
app.listen(PORT, function() {
	console.log("http://localhost:" + PORT);
});
