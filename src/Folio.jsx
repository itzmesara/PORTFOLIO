import { useForm, ValidationError } from "@formspree/react";
import "./Folio.css";

import { useEffect } from "react";
import Typed from "typed.js";
function Folios() {
  useEffect(() => {
    var typed = new Typed(".text", {
      strings: ["Frontend Developer", "MERN Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const [state,handleSubmit]=useForm("mvgozknp");
  if(state.succeeded)
  {
    alert("Form submitted successfully!");
    handleSubmit("");
  }
  return (
    <div className="Folio-body">
      <header className="header">
        <a href="#" className="logo">
          PortFolio
        </a>
        <nav className="navbar">
          <a href="#" style={{ "--i": "1" }} className="active">
            Home
          </a>
          <a href="#" style={{ "--i": "2" }}>
            About
          </a>
          <a href="#" style={{ "--i": "3" }}>
            Skill
          </a>
          <a href="#" style={{ "--i": "4" }}>
            Portfolio
          </a>
          <a href="#" style={{ "--i": "5" }}>
            Contact
          </a>
        </nav>
      </header>
      <section className="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Saravanan C</h1>
          <h3>
            And I'm a <span className="text"></span>
          </h3>
          <p>I'm a web Designer</p>
          <div className="home-sci">
            <a href="https://wa.me/qr/YTPEG3MTW76GJ1" target="_blank" style={{ "--i": "7" }}>
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#" style={{ "--i": "8" }}>
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" style={{ "--i": "9" }}>
              <i className="bx bxl-github"></i>
            </a>
            <a href="#" style={{ "--i": "10" }}>
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <a href="#" className="btn-box">
            more about me
          </a>
        </div>
        <span className="home-imgHover"></span>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img
            src="https://webstockreview.net/images/png-format-images-3.png"
            alt=""
          />
        </div>
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <h4>Full Stack Developer</h4>
          <p>I'm a skilled joker</p>
          <a href="#" className="btn-box">
            More About Me
          </a>
        </div>
      </section>
      <section>
        <div className="services" id="services">
          <div className="container">
            <h1 className="sub-title">My <span>Services</span></h1>
            <div className="services-list">
              <div>
                <i className="bx bx-code" style={{color:"#00eeff"}}></i>
                <h2>UI/UX Design</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione, dolorum natus est excepturi iste dolore perspiciatis, dolores incidunt, fugit corporis! Dignissimos nulla modi soluta obcaecati quo odio, ipsum quas!
                </p>
                <a href="#" className="read">Learn more</a>
              </div>
              <div>
                <i className="bx bx-crop" style={{color:"#0ef"}}></i>
                <h2>UI/UX Design</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione, dolorum natus est excepturi iste dolore perspiciatis, dolores incidunt, fugit corporis! Dignissimos nulla modi soluta obcaecati quo odio, ipsum quas!
                </p>
                <a href="#" className="read">Learn more</a>
              </div>
              <div>
                <i className="bx bxl-apple" style={{color:"#0ef"}}></i>
                <h2>UI/UX Design</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione, dolorum natus est excepturi iste dolore perspiciatis, dolores incidunt, fugit corporis! Dignissimos nulla modi soluta obcaecati quo odio, ipsum quas!
                </p>
                <a href="#" className="read">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="sub-title">My <span>Skills</span></h1>
      <section id="my-skills">
        <div className="container1" id="skills">
          <h1 className="heading1">Technical Skills</h1>
          <div className="Technical-bars">
            <div className="bar"><i style={{color:"#c95d2e"}} className="bx bxl-html5"></i>
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar"><i style={{color:"#147bbc"}} className="bx bxl-css3"></i>
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar"><i style={{color:"#b0bc1e"}} className="bx bxl-javascript"></i>
              <div className="info">
                <span>JavaScript</span>
              </div>
              <div className="progress-line js">
                <span></span>
              </div>
            </div>
            <div className="bar"><i style={{color:"#c32ec9"}} className="bx bxl-python"></i>
              <div className="info">
                <span>Python</span>
              </div>
              <div className="progress-line python">
                <span></span>
              </div>
            </div>
            <div className="bar"><i style={{color:"#69bcbc"}} className="bx bxl-react"></i>
              <div className="info">
                <span>React</span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Creativity</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">65%</div>
            <div className="text">Communication</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Problem Solving</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">85%</div>
            <div className="text">TeamWork</div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <div id="portfolio">
          <div className="main-text" id="project">
            <h2>Latest <span>Project</span></h2>
            <div className="portfolio-content">
              <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMAHGby2vJCooaOrD5jX8BchRcDw7ypUQOw&s" alt="" />
                <div className="layer">
                  <h5>UI/UX Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sed sapiente, architecto quos inventore labore temporibus eius quas explicabo quasi earum? Fuga provident quia incidunt quod nostrum officiis obcaecati impedit.</p>
                  <a href="#"><i className="bx bx-link-external" style={{color:"black"}}></i></a>
                </div>
              </div>
              <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMAHGby2vJCooaOrD5jX8BchRcDw7ypUQOw&s" alt="" />
                <div className="layer">
                  <h5>UI/UX Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sed sapiente, architecto quos inventore labore temporibus eius quas explicabo quasi earum? Fuga provident quia incidunt quod nostrum officiis obcaecati impedit.</p>
                  <a href="#"><i className="bx bx-link-external" style={{color:"#000"}}></i></a>
                </div>
              </div>
              <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMAHGby2vJCooaOrD5jX8BchRcDw7ypUQOw&s" alt="" />
                <div className="layer">
                  <h5>UI/UX Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sed sapiente, architecto quos inventore labore temporibus eius quas explicabo quasi earum? Fuga provident quia incidunt quod nostrum officiis obcaecati impedit.</p>
                  <a href="#"><i className="bx bx-link-external" style={{color:"#000"}}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>Contact <span>Me</span></h2>
          <h4>Let's work together</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci repudiandae corporis voluptate aperiam quo quidem iure, perferendis provident porro ullam atque eaque quia optio illo accusantium molestias fugit debitis.</p>
          <div className="contact-list">
            <li><a href="mailto:saravanan2006sarass@gmail.com"><i className="bx bxs-send"></i> saravanan2006sarass@gmail.com</a></li>
            <li><a href="tel:+919344743652"><i className="bx bxs-phone"></i> CONTACT</a></li>
          </div>
          <div className="contact-icons">
            <a href=""><i className="bx bxl-facebook-circle" style={{"--i":"2"}}></i></a>
            <a href=""><i className="bx bxl-twitter" style={{"--i":"2"}}></i></a>
            <a href=""><i className="bx bxl-instagram" style={{"--i":"2"}}></i></a>
            <a href=""><i className="bx bxl-linkedin" style={{"--i":"2"}}></i></a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" id="text" required/>
            <ValidationError prefix="Name" field="text" errors={state.errors}/>
            <input type="email" placeholder="Enter your Email" id="email" required/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>

            <input type="text" placeholder="Enter your Subject" id="subject" required/>
            <ValidationError prefix="Subject" field="subject" errors={state.errors}/>
            <textarea name="" id="message" cols="40" rows="10" placeholder="Enter Your Message"></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <input type="submit" value="submit" className="send" disabled={state.submitting}/>
          </form>
        </div>
      </section>
      <div className="last-text">
        <p>Developed by Saravanan C</p>
      </div>
      <a href="#" className="top"><i className="bx bx-up-arrow-alt"></i></a>
    </div>
  );
}

export default Folios;
