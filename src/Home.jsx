import React from 'react';
import './home.css';
import Project from './Project';
import TimeLine from './TimeLine';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import Skills from './Skills';
import abhi from './images/img1.jpeg';
import Footer from './Footer.jsx';


const Home = () => {
  return (
    <>

      <div className="bgattachedImage">

        <div className="text-white text-center rgba-stylish-strong Home_banner__fFRb6">
          <h5 className="h5 primary-colour">
            <FontAwesome className="fas fa-briefcase mr-1" />
            Portfolio</h5>

          <div className="TextAnimationh1 mt-5">
            <h1>
              <span
                className="txt-rotate helements"
                data-period="2000"
                data-rotate='[ "I am Developer"," I am Blogger" ]'
              ></span>
            </h1>
          </div>
          <div className="mb-2 pb-2 mt-2">
            <p className="quotep_Dont mb-3"><FontAwesome className="fas fa-quote-left" />Dont limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.<FontAwesome className="fas fa-quote-right" /></p>
            <a target="_blank" style={{ textDecoration: "none", color: "#fff" }} className=" resumebtn primary-bgColour waves-effect waves-light" href="https://drive.google.com/file/d/1REG_reXZuA-NiI7zlQWAN12suf5H1A1a/view?usp=sharing" rel="noreferrer"><FontAwesome className="fas fa-clone left mr-1" />
                             View Resume</a>
          </div></div>
      </div>
      <div className="Home_body__2gksT ">
        <div className="Home_mainBody__2p4-X ">
          <h1 className="mb-4 text-center secondary-colour font-weight-light">My Timeline</h1>
          <hr style={{ margin: "0px 10%" }} />
          <div className="row">
            <div className="col-md-12">
              <TimeLine position="InternShip" companyName="Let's Grow More" duration="September 2021- Present" />
              <TimeLine position="InternShip" companyName="Techtable" duration=" Februray 2021- June 2021" />
              <TimeLine position="Under Graduation" companyName="Dronacharya College Of Engineering" duration="August 2019 - Current" />
              <TimeLine position="Senior Secondary" companyName="Kendriya Vidyalaya" duration="2018 - 2019" />
              <TimeLine position="High School" companyName="Kendriya Vidyalaya" duration="2016-2017" />
            </div></div>
        </div>
        <div className="Home_sideBody__2YMQ5 ">
          <div className="card testimonial-card mb-5">
            <div className="card-up secondary-bgColour lighten-1"></div>
            <div className="avatar mx-auto white">
              <img src={abhi} className="rounded-circle AboutCard_image__2w_OX" alt=".." />
            </div><div className="card-body">
              <h4 className="card-title">Devanshi Mishra</h4>
              <hr />
              <p>I am a passionate developer, I have an experience in front-end development, open source and I am currently exploring Backend Development,Android Development.</p></div></div>

          <div className="card mb-5">
            <h3 className="py-3 text-center">My Skills</h3>
            <Skills skill="Languages" skill1="C Language" skill2="C+
                   +" skill3="Kotlin" skill4="HTML" skill5="CSS"  skill6="Javascript" skill7="Dart" />

            <Skills skill="Frameworks and Libraries" 
              skill1="Reactjs"  skill2="Flutter" skill3="Bootstrap" />

            <Skills skill="IDEs and Editors" skill1="Sublime Text" skill2="Visual Studio" skill3="Netbeans"  skill4="Eclipse" />

            <Skills skill="Tools" skill1="Git" skill2="Firebase" />
              

            <Skills skill="DataBase" skill1="MySql" />

            <Skills skill="Operating System" skill1="Windows" skill2="Linux"  />
          </div></div></div>


      <section id="portfolio">
        <h1 className="section-heading text-center mb-0">

          <span style={{ fontWeight: "300" }}> Projects</span>
        </h1>
        <hr style={{ width: "60%" }} />
        <div className="projectbg">
          <div className="portfolio-container">

               <Project project="High_Five" projecthref="https://github.com/devanshi-code/high-five" />

               <Project project="Sambhav" projecthref="https://github.com/devanshi-code/Hack-spirit-Sambhav-HTM" />

               <Project project="CALCULATOR" projecthref="https://github.com/devanshi-code/CALCULATOR-APP" />  
          </div>
        </div>
        <div className="projectbg">
          <div className="portfolio-container">
          <Project project="Visiting-Card" projecthref=" https://github.com/devanshi-code/Visiting-Card" />

          <Project project="DSA" projecthref="https://github.com/devanshi-code/New-folder" />

          <Project project="Analogue-Clock" projecthref="https://github.com/devanshi-code/analogue-clock" />
          </div></div>
      </section>
      <br />

      <Footer />

    </>
  )
}

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};

export default Home;