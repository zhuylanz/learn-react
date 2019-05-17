const React = require("react");
const LoaderComponent = require("../components/loader-component");
const NavBarComponent = require("../components/nav-bar-component");

const DefaultLayout = ({ children }) => (
	<React.Fragment>
		<LoaderComponent />
		<NavBarComponent />
		{children}
	</React.Fragment>
);

module.exports = DefaultLayout;
