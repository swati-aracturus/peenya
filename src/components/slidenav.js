
  import { useState, useEffect } from "react";
  import AOS from "aos";
  import "aos/dist/aos.css";
  function Slide() {
    useEffect(() => {
      AOS.init();
    }, []);
  

  return (
    <>
     <header>
          <div className="container">
            <input type="checkbox" name="check" id="check" />
            <div className="logo-container">
              <img src="/logopeenyainfo.png" height={100} width={200}></img>
            </div>

            <div className="nav-btn">
              <div className="nav-links">
                <ul>
                  <li className="nav-link">
                    <a href="#">Home</a>
                  </li>
                  <li className="nav-link">
                    <a href="#">
                      Dashboard<i className="fas fa-caret-down"></i>
                    </a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <a href="#">Link 1</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Link 2</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">
                            Link 3<i className="fas fa-caret-down"></i>
                          </a>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <a href="#">Link 1</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Link 2</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Link 3</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">
                                  More<i className="fas fa-caret-down"></i>
                                </a>
                                <div className="dropdown second">
                                  <ul>
                                    <li className="dropdown-link">
                                      <a href="#">Link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                      <a href="#">Link 2</a>
                                    </li>
                                    <li className="dropdown-link">
                                      <a href="#">Link 3</a>
                                    </li>
                                    <div className="arrow"></div>
                                  </ul>
                                </div>
                              </li>
                              <div className="arrow"></div>
                            </ul>
                          </div>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Link 4</a>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-link">
                    <a href="#">
                      Listing<i className="fas fa-caret-down"></i>
                    </a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <a href="#">Link 1</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Link 2</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">
                            Link 3<i className="fas fa-caret-down"></i>
                          </a>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <a href="#">Link 1</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Link 2</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Link 3</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">
                                  More<i className="fas fa-caret-down"></i>
                                </a>
                                <div className="dropdown second">
                                  <ul>
                                    <li className="dropdown-link">
                                      <a href="#">Link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                      <a href="#">Link 2</a>
                                    </li>
                                    <li className="dropdown-link">
                                      <a href="#">Link 3</a>
                                    </li>
                                    <div className="arrow"></div>
                                  </ul>
                                </div>
                              </li>
                              <div className="arrow"></div>
                            </ul>
                          </div>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Link 4</a>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-link">
                    <a href="#">Explore</a>
                  </li>
                  <li className="nav-link">
                    <a href="#">Template</a>
                  </li>
                  <li className="nav-link">
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
              <div className="log-sign">
                <a href="#" className="svg-btn ">
                  <img
                    src="/user.svg"
                    height={35}
                    width={35}
                    alt="user img"
                  ></img>
                </a>
                <a href="#" className="svg-btn ">
                  <img
                    src="/heart.svg"
                    height={32}
                    width={32}
                    alt="user img"
                  ></img>
                </a>

                <a href="#" className="btn transparent">
                  Log in
                </a>
                <a href="#" className="btn solid">
                  Sign up
                </a>
              </div>
            </div>

            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div></div>
              </div>
            </div>
          </div>
        </header>
    </>
  );
}

export default Slide;
