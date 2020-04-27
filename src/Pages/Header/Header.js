import React, { Component } from "react";
import "./Header.scss";

// import myPageIcon from '/image/icon.png';

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="content">
          <div className="nav-all">
            <div className="flex-aligncenter">
              <div className="nav-leftflex">
                <div className="nav-leftname">
                  <div className="logo-flex-img">
                    <a className="logo-flex" href="/#">
                      <img
                        src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Converse3-Logo.wine.svg"
                        className="header-navigation"
                        alt=""
                      />
                    </a>
                    <nav className="nav-content">
                      <ul className="ul-name">
                        <li className="li-name">
                          <a> 신발 </a>
                        </li>
                        <li className="li-name">
                          <a> 의류 </a>
                        </li>
                        <li className="li-name">
                          <a> 아동 </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="navright-all">
                <div className="nav-right">
                  <div className="user-img">
                    <img
                      src="https://image.flaticon.com/icons/svg/747/747376.svg"
                      alt=""
                    />
                  </div>
                  <div className="shopping-cart">
                    <img
                      src="https://image.flaticon.com/icons/svg/481/481384.svg"
                      alt=""
                    />
                  </div>
                  <div className="heart-img">
                    <img
                      src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                      alt=""
                    />
                  </div>

                  <div className="question-mart">
                    <img
                      src="https://image.flaticon.com/icons/svg/906/906794.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="search-box">
                  <span className="ptag-search">검색</span>
                  <image
                    className="search-img"
                    src="https://image.flaticon.com/icons/svg/101/101826.svg"
                    alt="searchbar"
                  ></image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;