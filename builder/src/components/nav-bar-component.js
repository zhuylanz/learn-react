const React = require("react");

const NavBarComponent = () => (
    <div id="sidebar" className="sidebar">
        <div className="menu-left-part">
            <div className="search-holder">
                <label>
                    <input
                        type="search"
                        className="search-field"
                        placeholder="Type here to search..."
                        value=""
                        name="s"
                        title="Search for:"
                    />
                </label>
            </div>
            <div className="site-info-holder">
                <h1 className="site-title">Suppablog</h1>
                <p className="site-description">
                    Suppablog is simple and yet cool wordpress theme to lorem
                    ipsum dolor sit.
                </p>
            </div>
            <nav id="header-main-menu">
                <ul className="main-menu sm sm-clean">
                    <li>
                        <a href="index.html" className="current">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="scroll.html">Scroll</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </nav>
            <footer>
                <div className="footer-info">
                    © 2018 SUPPABLOG HTML TEMPLATE. <br /> CRAFTED WITH{" "}
                    <i className="fa fa-heart" /> BY{" "}
                    <a href="https://colorlib.com">COLORLIB</a>.
                </div>
            </footer>
        </div>
        <div className="menu-right-part">
            <div className="logo-holder">
                <a href="index.html">
                    <img src="/images/logo.png" alt="Suppablog WP" />
                </a>
            </div>
            <div className="toggle-holder">
                <div id="toggle">
                    <div className="menu-line" />
                </div>
            </div>
            <div className="social-holder">
                <div className="social-list">
                    <a href="#">
                        <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fa fa-youtube-play" />
                    </a>
                    <a href="#">
                        <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                        <i className="fa fa-vimeo" />
                    </a>
                    <a href="#">
                        <i className="fa fa-behance" />
                    </a>
                    <a href="#">
                        <i className="fa fa-rss" />
                    </a>
                </div>
            </div>
            <div className="fixed scroll-top">
                <i className="fa fa-caret-square-o-up" aria-hidden="true" />
            </div>
        </div>
        <div className="clear" />
    </div>
);

module.exports = NavBarComponent;
