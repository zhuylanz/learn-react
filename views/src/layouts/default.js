const React = require("react");
const LoaderComponent = require("../components/loader-component");
const NavBarComponent = require("../components/nav-bar-component");

const DefaultLayout = ({ children }) => (
	<div>
		<LoaderComponent />
		<NavBarComponent />
		{children}
	</div>
);

module.exports = DefaultLayout;
