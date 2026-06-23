import { useEffect, useRef, useState } from "react";
import "./../styles/portfolio.css";

import bgImage from "../assets/portfolio-bg.png";
import myPhoto from "../assets/profile.jpeg";
import resumeFile from "../assets/resume.pdf";
import gradyxImage from "../assets/projects/gradyx.png";
import portfolio3dImage from "../assets/projects/portfolio3d.png";
import hackathonImg from "../assets/achievements/hackathon.jpg";
import gradyxExpoImg from "../assets/achievements/gradyx-expo.jpg";
import contactBg from "../assets/contact-bg.png";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
  FaGraduationCap,
  FaStar,
  FaTrophy,
  FaCode,
  FaBrain,
  FaRocket,
  FaGlobe,
  FaTools,
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaRobot,

  FaLaptopCode,
  FaChartBar,
  FaUsers,

  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCalendarAlt,
  FaPaperPlane
} from "react-icons/fa";
export default function PortfolioPage() {
  const skillsRef = useRef(null);
  const achievementRef = useRef(null);
  const experienceRef = useRef(null);
  const formRef = useRef();
  const [lineProgress, setLineProgress] = useState(0);
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_e1yyxka",
      "template_ch2778b",
      formRef.current,
      "YTk0m-IXdCzMW7HWg"
    )
    .then(
      () => {
        alert("✅ Message Sent Successfully!");

        formRef.current.reset();
      },
      (error) => {
        console.log(error);

        alert("❌ Failed to send message.");
      }
    );
};
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const categories = skillsRef.current?.querySelectorAll(".skill-category");
    if (!categories?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    categories.forEach((category) => observer.observe(category));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards =
      document.querySelectorAll(
        ".achievement-card"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "show-card"
              );
            } else {
              entry.target.classList.remove(
                "show-card"
              );
            }
          });
        },
        {
          threshold: 0.3,
        }
      );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!experienceRef.current) return;

      const rect = experienceRef.current.getBoundingClientRect();
      const sectionHeight = experienceRef.current.offsetHeight;
      const visible = window.innerHeight - rect.top;
     const progress =
  Math.max(
    0,
    Math.min(
      (window.innerHeight - rect.top) /
      (sectionHeight - window.innerHeight),
      1
    )
  );

      setLineProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* =========================
          ABOUT SECTION
      ========================= */}

      <section
        id="about"
        className="portfolio-page"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >

        {/* NAVBAR */}
        <nav className="portfolio-navbar">

          {/* LOGO */}
          <div
            className="logo"
            onClick={scrollToTop}
          >

            <div className="logo-mark">
              <span>S</span>
              <span>G</span>
            </div>

            <div className="logo-divider"></div>

            <span className="logo-name">
              SAI GANESH
            </span>

          </div>

          {/* NAV LINKS */}
          <div className="nav-links">

            <a href="#about">
              ABOUT
            </a>

            <a href="#skills">
              SKILLS
            </a>

            <a href="#projects">
              PROJECTS
            </a>

            <a href="#achievements">
              ACHIEVEMENTS
            </a>

            <a href="#experience">
              EXPERIENCE
            </a>

            <a href="#contact">
              CONTACT
            </a>

          </div>

        </nav>

        {/* OVERLAY */}
        <div className="portfolio-overlay"></div>

        {/* CONTENT */}
        <div className="portfolio-content">

          {/* LEFT SIDE */}
          <div className="portfolio-left">

            <p className="portfolio-tag">
              ABOUT ME
            </p>

            <h1 className="portfolio-title">
              AI ENGINEER
              <br />
              & MERN
              <span> DEVELOPER</span>
            </h1>

            <p className="portfolio-description">
              Passionate B.Tech AI student focused on
              MERN Stack, Generative AI and building
              futuristic digital experiences with
              modern technologies and intelligent
              problem-solving.
            </p>

            {/* BUTTONS */}
            <div className="portfolio-buttons">

              <a
                href={resumeFile}
                download="Sai-Ganesh-Resume.pdf"
                className="resume-btn"
              >
                <FaDownload />
                Resume
              </a>

              <button className="contact-btn">
                Contact Me
              </button>

            </div>

            {/* STATS */}
            <div className="stats-row">

              <div className="stat-card">
                <div className="stat-icon">
                  <FaGraduationCap />
                </div>

                <h2>8.76</h2>
                <p>CGPA</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaStar />
                </div>

                <h2>160+</h2>
                <p>Alpha Rank</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaTrophy />
                </div>

                <h2>24H</h2>
                <p>Hackathon</p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="portfolio-right">

            <div className="image-glow"></div>

            <img
              src={myPhoto}
              alt="Sai Ganesh"
              className="my-photo"
            />

          </div>

        </div>

        {/* SOCIAL ICONS */}
        <div className="portfolio-socials">

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

          <a href="mailto:sganeshjoga@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </section>
      {/* =========================
    SKILLS SECTION
========================= */}

<section
  id="skills"
  className="skills-section"
>

  <div className="skills-top">

    <p className="skills-tag">
      MY SKILLS
    </p>

    <h2 className="skills-heading">
      TECH STACK & <span>EXPERTISE</span>
    </h2>

    <p className="skills-subtitle">
      Technologies and tools I use to build
      intelligent, scalable and impactful digital solutions.
    </p>

  </div>

  <div className="skills-panel" ref={skillsRef}>

    <div className="skill-category skill-row">
      <div className="skill-lead">
        <div className="skill-icon-wrap"><FaCode /></div>
        <div>
          <h3>PROGRAMMING</h3>
          <p>Languages I work with</p>
        </div>
      </div>
      <div className="skill-pill-row">
        <span className="skill-pill"><FaPython /> Python</span>
        <span className="skill-pill"><FaJava /> Java</span>
        <span className="skill-pill">C</span>
        <span className="skill-pill">C++</span>
        <span className="skill-pill"><FaJsSquare /> JavaScript</span>
      </div>
    </div>

    <div className="skill-category skill-row">
      <div className="skill-lead">
        <div className="skill-icon-wrap"><FaGlobe /></div>
        <div>
          <h3>WEB DEVELOPMENT</h3>
          <p>Building modern web experiences</p>
        </div>
      </div>
      <div className="skill-pill-row">
        <span className="skill-pill"><FaHtml5 /> HTML</span>
        <span className="skill-pill"><FaCss3Alt /> CSS</span>
        <span className="skill-pill"><FaJsSquare /> JavaScript</span>
        <span className="skill-pill"><FaReact /> React</span>
        <span className="skill-pill"><FaNodeJs /> Node.js</span>
      </div>
    </div>

    <div className="skill-category skill-row">
      <div className="skill-lead">
        <div className="skill-icon-wrap"><FaBrain /></div>
        <div>
          <h3>AI & MACHINE LEARNING</h3>
          <p>Building intelligent systems and solutions</p>
        </div>
      </div>
      <div className="skill-pill-row">
        <span className="skill-pill"><FaBrain /> Machine Learning</span>
        <span className="skill-pill"><FaBrain /> Deep Learning</span>
        <span className="skill-pill"><FaRocket /> Generative AI</span>
        <span className="skill-pill"><FaRobot /> Prompt Engineering</span>
        <span className="skill-pill"><FaRobot /> AI Tools & APIs</span>
      </div>
    </div>

    <div className="skill-category skill-row">
      <div className="skill-lead">
        <div className="skill-icon-wrap"><FaTools /></div>
        <div>
          <h3>TOOLS & TECHNOLOGIES</h3>
          <p>Tools that power my development</p>
        </div>
      </div>
      <div className="skill-pill-row">
        <span className="skill-pill"><FaGithub /> Git</span>
        <span className="skill-pill"><FaGithub /> GitHub</span>
        <span className="skill-pill"><FaCode /> VS Code</span>
      </div>
    </div>

  </div>

</section>
<section id="projects" className="projects-section">

  <div className="projects-top">
    <p className="projects-tag">MY WORK</p>

    <h2 className="projects-heading">
      FEATURED <span>PROJECTS</span>
    </h2>

    <p className="projects-subtitle">
      Innovative AI and Web Development projects built with modern technologies.
    </p>
  </div>

  <div className="projects-grid">

    {/* GRADYX */}
    <div className="project-card">

      <img
        src={gradyxImage}
        alt="GRADYX"
        className="project-image"
      />

      <div className="project-content">

        <h3>GRADYX</h3>

        <h4>AI Answer Sheet Evaluation System</h4>

        <p>
          OCR + OpenCV + AI powered answer sheet evaluation
          platform for educational institutions.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>OCR</span>
          <span>OpenCV</span>
          <span>AI</span>
        </div>

        <div className="project-actions">
          <a
            href="https://github.com/24A31A43A6/gradyx-student-evaluation/tree/main/orchids-ai-answer-sheet-evaluation-main"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            Code
          </a>
          <a href="#">
            ↗ Live Preview
          </a>

        </div>

      </div>

    </div>

    {/* PORTFOLIO */}

    <div className="project-card">

      <img
        src={portfolio3dImage}
        alt="3D Portfolio"
        className="project-image"
      />

      <div className="project-content">

        <h3>3D MERN Portfolio</h3>

        <h4>Premium Interactive Portfolio</h4>

        <p>
          Futuristic portfolio built with React,
          Three.js, GSAP and Framer Motion.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>Three.js</span>
          <span>GSAP</span>
          <span>Framer Motion</span>
        </div>

        <div className="project-actions">

          <a href="#">
            <FaGithub />
            Code
          </a>

          <a href="#">
            ↗ Live Preview
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
<section
  id="achievements"
  className="achievements-section"
  ref={achievementRef}
>

  <div className="achievement-header">

    <p className="achievement-tag">
      RECOGNITION
    </p>

    <h2 className="achievement-title">
      ACHIEVEMENTS
    </h2>

  </div>

  <div className="achievement-grid">

    {/* HACKATHON */}

    <div className="achievement-card left-card">

      <img
        src={hackathonImg}
        alt="Hackathon"
        className="achievement-img"
      />

      <div className="achievement-content">

        <h3>
          VIZAG Tri-Mobility Challenge 2026
        </h3>

        <p>
          Awarded a Certificate of Merit at the 24-hour national-level
          VIZAG Tri-Mobility Challenge hosted by NSRIT, where I strengthened
          my rapid problem-solving, innovation and collaboration skills.
        </p>

      </div>

    </div>

    {/* GRADYX */}

    <div className="achievement-card right-card">

      <img
        src={gradyxExpoImg}
        alt="GRADYX"
        className="achievement-img"
      />

      <div className="achievement-content">

        <h3>
          GRADYX Project Expo
        </h3>

        <p>
          Showcased the GRADYX project at STRIDES 2K26, representing the AI
          Department of Pragati Engineering College, and earned a Certificate
          of Merit for technical excellence and presentation impact.
        </p>

      </div>

    </div>

  </div>

</section>
<section
  id="experience"
  className="experience-section"
  ref={experienceRef}
>

  <div className="experience-header">

    <p className="experience-tag">
      MY JOURNEY
    </p>

    <h2 className="experience-title">
      EXPERIENCE
    </h2>

    <p className="experience-subtitle">
      Professional growth, leadership and learning journey.
    </p>

  </div>

  <div className="timeline-container">

    <div className="timeline-track">
      <div className="timeline-line"></div>
      <div
        className="timeline-progress"
        style={{
          height: `${lineProgress}%`
        }}
      ></div>
    </div>

    {/* MERN INTERN */}

    <div className="timeline-item">

      <div className="timeline-node">
        <div className="timeline-dot"></div>
      </div>

      <div className="timeline-date">
        JUN 2026<br />
        JUL 2026
      </div>

      <div className="timeline-card">

        <div className="timeline-icon">
          <FaLaptopCode />
        </div>

        <div className="timeline-content">

          <h3>MERN STACK INTERN</h3>

          <h4>
            HIPPO CLOUD TECHNOLOGIES, Visakhapatnam
          </h4>

          <ul>
            <li>Worked on MERN Stack Development.</li>
            <li>Built applications using React and Node.js.</li>
            <li>Worked with Express.js and MongoDB.</li>
            <li>Collaborated on real-world projects.</li>
          </ul>

        </div>

      </div>

    </div>

    {/* POWER BI */}

    <div className="timeline-item">

      <div className="timeline-node">
        <div className="timeline-dot"></div>
      </div>

      <div className="timeline-date">
        2026<br />
        PRESENT
      </div>

      <div className="timeline-card">

        <div className="timeline-icon">
          <FaChartBar />
        </div>

        <div className="timeline-content">

          <h3>POWER BI TRAINEE</h3>

          <h4>CSC INDIA</h4>

          <ul>
            <li>Learning Data Visualization.</li>
            <li>Building dashboards.</li>
            <li>Exploring Business Intelligence.</li>
            <li>Working with analytics reports.</li>
          </ul>

        </div>

      </div>

    </div>

    {/* CLASS REP */}

    <div className="timeline-item">

      <div className="timeline-node">
        <div className="timeline-dot"></div>
      </div>

      <div className="timeline-date">
        2024<br />
        PRESENT
      </div>

      <div className="timeline-card">

        <div className="timeline-icon">
          <FaUsers />
        </div>

        <div className="timeline-content">

          <h3>CLASS REPRESENTATIVE</h3>

          <h4>Pragati Engineering College</h4>

          <ul>
            <li>Managing academic coordination.</li>
            <li>Bridge between students and faculty.</li>
            <li>Handling announcements.</li>
            <li>Supporting events and activities.</li>
          </ul>

        </div>

      </div>

    </div>

    {/* AI STUDENT */}

    <div className="timeline-item">

      <div className="timeline-node">
        <div className="timeline-dot"></div>
      </div>

      <div className="timeline-date">
        2024<br />
        PRESENT
      </div>

      <div className="timeline-card">

        <div className="timeline-icon">
          <FaGraduationCap />
        </div>

        <div className="timeline-content">

          <h3>AI STUDENT</h3>

          <h4>Pragati Engineering College</h4>

          <ul>
            <li>Pursuing B.Tech Artificial Intelligence.</li>
            <li>Learning AI and Machine Learning.</li>
            <li>Building MERN Stack projects.</li>
            <li>Maintaining strong academic performance.</li>
          </ul>

        </div>

      </div>

    </div>

  </div>

</section>
        <section
  id="contact"
  className="contact-section"
  style={{
    backgroundImage: `url(${contactBg})`
  }}
>

  <div className="contact-overlay"></div>

  <div className="contact-container">

    {/* LEFT */}

    <div className="contact-left">

      <p className="contact-tag">
        LET'S CONNECT
      </p>

      <h2 className="contact-title">
        CONTACT <span>ME</span>
      </h2>

      <p className="contact-desc">
        Have a project idea or want to collaborate?
        I'm always open to discussing new opportunities.
      </p>

      <div className="contact-info-grid">

        <div className="info-card">
          <FaEnvelope />
          <div>
            <h4>EMAIL</h4>
            <p>sganeshjoga@gmail.com</p>
          </div>
        </div>

        <div className="info-card">
          <FaPhoneAlt />
          <div>
            <h4>PHONE</h4>
            <p>+91 63019 15183</p>
          </div>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <div>
            <h4>LOCATION</h4>
            <p>Pithapuram Andhra Pradesh, India</p>
          </div>
        </div>

        <div className="info-card">
          <FaCalendarAlt />
          <div>
            <h4>AVAILABLE</h4>
            <p>Open for Internships</p>
          </div>
        </div>

      </div>

      <div className="social-heading">
        LET'S CONNECT
      </div>

      <div className="contact-socials">

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
          href="https://www.instagram.com/nameisgani_0602/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a href="mailto:sganeshjoga@gmail.com">
          <FaEnvelope />
        </a>

      </div>

    </div>

    {/* RIGHT */}

    <div className="contact-form-box">

      <h3>
        SEND ME A <span>MESSAGE</span>
      </h3>

     <form
  ref={formRef}
  onSubmit={sendEmail}
   >

        <div className="double-input">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

        </div>

        <input
          type="text"
          placeholder="Subject"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          SEND MESSAGE
          <FaPaperPlane />
        </button>

      </form>

    </div>

  </div>

</section>
          </>
  );
}