import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Container from "../Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [activeMobMenu, setActiveMobMenu] = useState(false);
  const header = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let anim;

    if (window.innerWidth > 1024) {
      anim = gsap.timeline({ paused: true }).to(header.current, 0.4, { yPercent: -100 });
    } else {
      anim = gsap
        .timeline({ paused: true })
        .to(header.current.querySelector(".c-header-logo"), 0.3, { y: -100 })
        .to(header.current.querySelector(".c-header-auth"), 0.3, { y: -100 }, "<");
    }

    ScrollTrigger.create({
      trigger: header.current,
      start: "top top",
      endTrigger: ".c-footer",
      markers: false,
      onUpdate: (self) => {
        if (self.direction === 1 && anim.progress() === 0) {
          anim.play();
        }

        if (self.direction === -1 && anim.progress() === 1) {
          anim.reverse();
        }
      },
    });
  }, []);

  useEffect(() => {
    setActiveMobMenu(false);
  }, [location]);

  return (
    <>
      <header className="c-header" ref={header}>
        <Container>
          <Link className="c-header-logo" to="/">
            <img src={logo} alt="site logo" />
          </Link>

          <nav className={`c-header-menu ${activeMobMenu ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink to="/general">General Information</NavLink>
              </li>

              <li>
                <NavLink to="/">Market Commentary</NavLink>
              </li>

              <li>
                <NavLink to="/team">Team</NavLink>
              </li>

              <li>
                <NavLink to="/login">Login</NavLink>
              </li>

              <li>
                <NavLink className="el-button" to="/">
                  Join
                </NavLink>
              </li>
            </ul>

            <span className="c-header-menu--title" onClick={() => setActiveMobMenu(!activeMobMenu)}>
              Menu
            </span>
          </nav>

          <div className="c-header-auth">
            <Link className="auth active" to="/">
              Account
            </Link>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
