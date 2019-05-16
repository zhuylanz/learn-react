const React = require("react");

class Component extends React.Component {
    _handleClick() {
        alert();
    }

    render() {
        return (
            <html>
                <head>
                    <title />
                </head>
                <body>
                    <div>
                        <h1>Hello World!</h1>
                        <p>Isn't server-side rendering remarkable?</p>
                        <button onClick={this._handleClick}>Click Me</button>
                    </div>
                    <script src="/testWebpack.js" />
                </body>
            </html>
        );
    }
}

const TestCom = ({ title }) => (
    <div>
        <h1>Hello {title}!</h1>
        <p>Isn't server-side rendering remarkable?</p>
        <button onClick={this._handleClick}>Click Me</button>
    </div>
);

const TestCom2 = () => <TestCom title="abc" />;

module.exports = Component;
