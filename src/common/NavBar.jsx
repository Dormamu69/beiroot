import React from 'react';
const Nav = () => {
    return ( 
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="buttons">
              <a className="button is-primary">Full Screen Icon</a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">Mute/Unmute Icon</a>
                {/* <a className="button is-primary">Full Screen Icon</a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
     );
}
 
export default Nav;