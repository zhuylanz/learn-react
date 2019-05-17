const React = require("react");

const TestCom = ({ title }) => (
    <div>
        <h1>Hello {title}!</h1>
        <p>Isn't server-side rendering remarkable?</p>
        <button onClick={this._handleClick}>Click Me</button>
    </div>
);

const TestCom2 = () => <TestCom title="abc" />;

// var Page = require("../pages/single");

module.exports = TestCom2;
