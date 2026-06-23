import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/loader.css";

export default function Loader() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem(
      "loaderShown",
      "true"
    );

    const timer = setTimeout(() => {
      navigate("/explore");
    }, 5500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="cinematic-loader">

      {/* PARTICLES */}
      <span className="particle p1"></span>
      <span className="particle p2"></span>
      <span className="particle p3"></span>
      <span className="particle p4"></span>
      <span className="particle p5"></span>
      <span className="particle p6"></span>

      <div className="loader-container">

        <p className="loader-heading">
          ENTERING THE DIGITAL EXPERIENCE
        </p>

        <h2 className="loader-sai">
          SAI
        </h2>

        <div className="ganesh-wrapper">

          <h1 className="loader-ganesh">
            GANESH
          </h1>

          {/* GOLD CENTER LIGHT */}
          <div className="ganesh-shine"></div>

        </div>

        {/* OPENING GOLD LINE */}
        <div className="loader-line"></div>

        <p className="loader-role">
          AI ENGINEER • MERN DEVELOPER
        </p>

        <p className="loader-footer">
          LOADING EXPERIENCE
          <span className="dot dot1">.</span>
          <span className="dot dot2">.</span>
          <span className="dot dot3">.</span>
        </p>

      </div>

    </section>
  );
}