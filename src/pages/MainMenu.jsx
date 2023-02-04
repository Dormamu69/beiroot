import React from "react";

const MainMenu = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div className={"content is-fluid"}>
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
        <section className="hero is-fullheight">
          <div className="hero-body">
            {/* using bulma css create a main menu with play,leaderboard,how to play options */}
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-half">
                  <div className="column is-centered">
                    <h1 className="title">BaeRoot</h1>
                    <h4 className="subtitle">Find the root of a word</h4>
                  </div>
                  <div className="box">
                    <div className="columns is-centered">
                      <div className="buttons is-centered">
                        <a className="button is-primary is-fullwidth">Play</a>
                        <a className="button is-primary is-fullwidth">
                          Leaderboard
                        </a>
                        <a className="button is-primary is-fullwidth">
                          How To Play
                        </a>
                        <a className="button is-primary is-fullwidth">Quit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainMenu;
