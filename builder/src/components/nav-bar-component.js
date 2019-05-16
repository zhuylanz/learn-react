const React = require("react");

const NavBarComponent = () => (
    <div id="sidebar" class="sidebar">
        <div class="menu-left-part">
            <div class="search-holder">
                <label>
                    <input
                        type="search"
                        class="search-field"
                        placeholder="Type here to search..."
                        value=""
                        name="s"
                        title="Search for:"
                    />
                </label>
            </div>
            <div class="site-info-holder">
                <h1 class="site-title">Suppablog</h1>
                <p class="site-description">
                    Suppablog is simple and yet cool wordpress theme to lorem
                    ipsum dolor sit.
                </p>
            </div>
            <nav id="header-main-menu">
                <ul class="main-menu sm sm-clean">
                    <li>
                        <a href="index.html" class="current">
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
                <div class="footer-info">
                    © 2018 SUPPABLOG HTML TEMPLATE. <br /> CRAFTED WITH{" "}
                    <i class="fa fa-heart" /> BY{" "}
                    <a href="https://colorlib.com">COLORLIB</a>.
                </div>
            </footer>
        </div>
        <div class="menu-right-part">
            <div class="logo-holder">
                <a href="index.html">
                    <img src="/images/logo.png" alt="Suppablog WP" />
                </a>
            </div>
            <div class="toggle-holder">
                <div id="toggle">
                    <div class="menu-line" />
                </div>
            </div>
            <div class="social-holder">
                <div class="social-list">
                    <a href="#">
                        <i class="fa fa-twitter" />
                    </a>
                    <a href="#">
                        <i class="fa fa-youtube-play" />
                    </a>
                    <a href="#">
                        <i class="fa fa-facebook" />
                    </a>
                    <a href="#">
                        <i class="fa fa-vimeo" />
                    </a>
                    <a href="#">
                        <i class="fa fa-behance" />
                    </a>
                    <a href="#">
                        <i class="fa fa-rss" />
                    </a>
                </div>
            </div>
            <div class="fixed scroll-top">
                <i class="fa fa-caret-square-o-up" aria-hidden="true" />
            </div>
        </div>
        <div class="clear" />
    </div>
);

module.exports = NavBarComponent;
