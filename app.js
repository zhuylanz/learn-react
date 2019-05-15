const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const port = 3001;

app.engine(
	"handlebars",
	hbs({
		extname: "handlebars",
		defaultLayout: "main",
		layoutsDir: __dirname + "/views/layouts/",
		partialsDir: __dirname + "/views/partials/"
	})
);
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/post/single.html", function(req, res) {
	res.render("single", { bodyClass: "single-post", title: "this is a test" });
});

app.listen(port, function() {
	console.log("Example app listening on port " + port);
});
