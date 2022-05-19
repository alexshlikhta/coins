import React from "react";
import useBodyClass from "../../hooks/useBodyClass";

// images for development
import majok from "../../assets/img/majok.jpg";
import Icon from "../../components/Icon";
import diamantSmall from "../../assets/img/p-team/diamant-small.png";
import diamant from "../../assets/img/p-team/diamant.png";
import Container from "../../components/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useBodyClass("p-team");

  return (
    <main className="p-team-main">
      <Container>
        <div className="p-team-main-img left" data-speed="1.4">
          <img src={diamantSmall} alt="diamont small" />
        </div>

        <div className="p-team-main-img right" data-speed="1.2">
          <img src={diamant} alt="diamont" />
        </div>

        <div className="p-team-main-top">
          <h1 className="el-title--h1">Our Greatest Minds</h1>

          <span className="el-title-h5">We are learning in Public, expect doozies and the dreaded Lollapalooza effect</span>
        </div>

        <div className="p-team-main-box">
          <ul className="member-box">
            <li className="member">
              <div className="member-inner">
                <div className="member-front">
                  <div className="member-img">
                    <img src={majok} alt="memberPhoto" />
                  </div>
                </div>

                <div className="member-back">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                  <span className="member-back--text">
                    Biography or something important about crypto experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo, viverra magna et porta at sed sed. Urna feugiat proin sit vitae, viverra at. Mauris, egestas tristique praesent
                    orci, fames blandit.
                  </span>
                </div>
              </div>

              <h3>Nhial Majok</h3>

              <h6>Technical Analyst</h6>

              <div className="member-social">
                <ul>
                  <li>
                    <a href="/">
                      <Icon name="linkedin" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="member">
              <div className="member-inner">
                <div className="member-front">
                  <div className="member-img">
                    <img src={majok} alt="memberPhoto" />
                  </div>
                </div>

                <div className="member-back">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                  <span className="member-back--text">
                    Biography or something important about crypto experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo, viverra magna et porta at sed sed. Urna feugiat proin sit vitae, viverra at. Mauris, egestas tristique praesent
                    orci, fames blandit.
                  </span>
                </div>
              </div>

              <h3>Nhial Majok</h3>

              <h6>Technical Analyst</h6>

              <div className="member-social">
                <ul>
                  <li>
                    <a href="/">
                      <Icon name="linkedin" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="member">
              <div className="member-inner">
                <div className="member-front">
                  <div className="member-img">
                    <img src={majok} alt="memberPhoto" />
                  </div>
                </div>

                <div className="member-back">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                  <span className="member-back--text">
                    Biography or something important about crypto experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo, viverra magna et porta at sed sed. Urna feugiat proin sit vitae, viverra at. Mauris, egestas tristique praesent
                    orci, fames blandit.
                  </span>
                </div>
              </div>

              <h3>Nhial Majok</h3>

              <h6>Technical Analyst</h6>

              <div className="member-social">
                <ul>
                  <li>
                    <a href="/">
                      <Icon name="linkedin" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="member">
              <div className="member-inner">
                <div className="member-front">
                  <div className="member-img">
                    <img src={majok} alt="memberPhoto" />
                  </div>
                </div>

                <div className="member-back">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                  <span className="member-back--text">
                    Biography or something important about crypto experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo, viverra magna et porta at sed sed. Urna feugiat proin sit vitae, viverra at. Mauris, egestas tristique praesent
                    orci, fames blandit.
                  </span>
                </div>
              </div>

              <h3>Nhial Majok</h3>

              <h6>Technical Analyst</h6>

              <div className="member-social">
                <ul>
                  <li>
                    <a href="/">
                      <Icon name="linkedin" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="member">
              <div className="member-inner">
                <div className="member-front">
                  <div className="member-img">
                    <img src={majok} alt="memberPhoto" />
                  </div>
                </div>

                <div className="member-back">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                  <span className="member-back--text">
                    Biography or something important about crypto experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo, viverra magna et porta at sed sed. Urna feugiat proin sit vitae, viverra at. Mauris, egestas tristique praesent
                    orci, fames blandit.
                  </span>
                </div>
              </div>

              <h3>Nhial Majok</h3>

              <h6>Technical Analyst</h6>

              <div className="member-social">
                <ul>
                  <li>
                    <a href="/">
                      <Icon name="linkedin" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="member">
              <div className="member-inner">
                <div className="member-front">
                  <div className="member-img">
                    <img src={majok} alt="memberPhoto" />
                  </div>
                </div>

                <div className="member-back">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                  <span className="member-back--text">
                    Biography or something important about crypto experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo, viverra magna et porta at sed sed. Urna feugiat proin sit vitae, viverra at. Mauris, egestas tristique praesent
                    orci, fames blandit.
                  </span>
                </div>
              </div>

              <h3>Nhial Majok</h3>

              <h6>Technical Analyst</h6>

              <div className="member-social">
                <ul>
                  <li>
                    <a href="/">
                      <Icon name="linkedin" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default Team;
