import React from "react";
import { Link, HashRouter } from "react-router-dom";
import Nav from "../common/NavBar";

const MainMenu = () => {
  return (
    <HashRouter>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div className={"content"}>
          <Nav home={true} />
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
                          <Link
                            className="button is-primary is-fullwidth"
                            to={"/game"}
                          >
                            Play
                          </Link>
                          <Link
                            className="button is-primary is-fullwidth"
                            to={"/leaderboard"}
                          >
                            Leaderboard
                          </Link>
                          <Link
                            className="button is-primary is-fullwidth"
                            to={"/howtoplay"}
                          >
                            How To Play
                          </Link>
                          <Link
                            className="button is-primary is-fullwidth"
                            to={"/game"}
                          >
                            Quit
                          </Link>
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
    </HashRouter>
  );
};

export default MainMenu;
