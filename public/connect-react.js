const LoaderComponent = require("./loader-component");
const NavBarComponent = require("./nav-bar-component");

console.log("works!");
console.log(LoaderComponent);
// <LoaderComponent />
// <NavBarComponent />
const App = () => <h1>BLAH BLAH BLAH</h1>;

ReactDOM.render(App, document.getElementById("reactRoot"));
