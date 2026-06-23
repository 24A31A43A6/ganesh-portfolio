import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaBrain,
  FaCode,
  FaRocket,
  FaCrosshairs
} from "react-icons/fa";

import "./../styles/explore.css";
import bgImage from "../assets/explore-bg.png";

export default function ExplorePage() {

  const navigate = useNavigate();

  const texts = [
  "CRAFTING DIGITAL EXPERIENCES",
  "BUILDING FUTURE WITH AI",
  "MERN STACK INNOVATOR",
  "TURNING IDEAS INTO REALITY",
];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {

  const currentText = texts[index];

  let timer;

  if (!deleting) {

    /* typing one by one */
    if (text.length < currentText.length) {

      timer = setTimeout(() => {

        setText(
          currentText.slice(
            0,
            text.length + 1
          )
        );

      }, 80);

    } else {

      /* wait after full sentence visible */
      timer = setTimeout(() => {

        setDeleting(true);

      }, 2500);
    }

  } else {

    /* delete one by one */
    if (text.length > 0) {

      timer = setTimeout(() => {

        setText(
          currentText.slice(
            0,
            text.length - 1
          )
        );

      }, 30);

    } else {

      /* next sentence */
      setDeleting(false);

      setIndex((prev) =>
        (prev + 1) % texts.length
      );
    }
  }

  return () => clearTimeout(timer);

}, [text, deleting, index, texts]);

  return (
    <section
      className="explore-page"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >

      {/* Overlay */}
      <div className="explore-overlay"></div>

      {/* Main Content */}
      <div className="explore-content">

        {/* Top Text */}
        <p className="explore-top-text">
          WELCOME TO MY DIGITAL WORLD
        </p>

        {/* Main Title */}
        <div className="explore-title">

          <span className="hello">
            HELLO,
          </span>

          <span className="im">
            I'M
          </span>

          <span className="name">
            SAI GANESH
          </span>

        </div>

        {/* Dynamic Text */}
        <div className="dynamic-text">
          <span className="typing-text">
            {text}
          </span>
        </div>

        {/* Premium Skills */}
        <div className="skills-row">

          <div className="skill-item">
            <div className="skill-symbol">
              <FaBrain />
            </div>

            <div className="skill-text">
              <p>AI</p>
              <p>ENGINEER</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="skill-item">
            <div className="skill-symbol">
              <FaCode />
            </div>

            <div className="skill-text">
              <p>MERN</p>
              <p>DEVELOPER</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="skill-item">
            <div className="skill-symbol">
              <FaRocket />
            </div>

            <div className="skill-text">
              <p>HACKATHON</p>
              <p>BUILDER</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="skill-item">
            <div className="skill-symbol">
              <FaCrosshairs />
            </div>

            <div className="skill-text">
              <p>PROBLEM</p>
              <p>SOLVER</p>
            </div>
          </div>

        </div>

        {/* Description */}
        <p className="explore-description">
          I build intelligent digital experiences
          using AI, MERN and futuristic engineering.
        </p>

        {/* Explore Button */}
        <button
          className="explore-btn"
          onClick={() => navigate("/portfolio")}
        >
          <span>
            EXPLORE MY WORLD
          </span>
        </button>

      </div>

      {/* Bottom Social Icons */}
      <div className="bottom-socials">

        <a
          href="https://github.com/24A31A43A6"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/p-v-sai-ganesh-joga-63509432b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a href="mailto:sganeshjoga@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      {/* Floating Particles */}
      <div className="particle p1"></div>
      <div className="particle p2"></div>
      <div className="particle p3"></div>
      <div className="particle p4"></div>
      <div className="particle p5"></div>
      <div className="particle p6"></div>
      <div className="particle p7"></div>
      <div className="particle p8"></div>
      <div className="particle p9"></div>
      <div className="particle p10"></div>
      <div className="particle p11"></div>
      <div className="particle p12"></div>

    </section>
  );
}