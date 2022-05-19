import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import eyeLogo from "../../assets/icons/eye-logo.png";
import Icon from "../Icon";

const Footer = () => {
  return (
    <>
      <footer className="c-footer">
        <div className="c-footer-top">
          <div className="c-footer-top--logo">
            <Link className="logo" to={"/"}>
              <img src={logo} alt="site logo" />
            </Link>

            <span className="logo--text">User driven crypto research and investment community</span>
          </div>

          <div className="c-footer-top-menu">
            <ul className="menu-list">
              <li className="menu-list-item">
                <Link to="/general">General Information</Link>
              </li>

              <li className="menu-list-item">
                <Link to="/">Market Commentary</Link>
              </li>
            </ul>

            <ul className="menu-list">
              <li className="menu-list-item">
                <Link to="general">Account</Link>
              </li>

              <li className="menu-list-item">
                <Link to="/team">Team</Link>
              </li>

              <li className="menu-list-item">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>

            <ul className="menu-list">
              <li className="menu-list-item">
                <Link to="/terms">Terms of use</Link>
              </li>

              <li className="menu-list-item">
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="c-footer-bottom">
          <ul className="social">
            <li>
              <a href="/">
                <Icon name="facebook" />
              </a>
            </li>

            <li>
              <a href="/">
                <Icon name="twitter" />
              </a>
            </li>

            <li>
              <a href="/">
                <Icon name="reddit" />
              </a>
            </li>

            <li>
              <a href="/">
                <Icon name="youtube" />
              </a>
            </li>

            <li>
              <a href="/">
                <Icon name="telegram" />
              </a>
            </li>
          </ul>

          <span className="publish">© 2021 Published by Utafiti</span>

          <span className="development">
            <span className="development--text">Design & Development:</span>
            <a target={"_blank"} rel="noopener noreferrer" href="https://litnevski.studio/">
              <img src={eyeLogo} alt="site logo" />
              Litnevski studio
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
