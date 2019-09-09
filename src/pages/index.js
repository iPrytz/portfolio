import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/cello-systems.png';
import pic2 from '../assets/images/moms-app.png';
import pic3 from '../assets/images/ninja-locator.png';
import pic4 from '../assets/images/prepaird.png';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-file-code-o"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="https://cellosystems.se/claim/new/telenor" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Insurance Platform</h2>
            <h4>Vue, .NET Core</h4>
            <p>
              A Web application to handle insurance claims for mobile phones, tablets and accessories. 
              The service is used by some of the big cell phone carriers in Sweden as a part of the insurance 
              they offer their customers and includes a claim registration flow, customer - and admin portal. 
              I have been leading the development and maintenance of the frontend in the application, 
              which is built in .NET and Vue, but also been implementing big parts of the backend and the 
              API built in .NET Core.            
            </p>
            <a href="https://cellosystems.se/claim/new/telenor" className="special">
              To Homepage
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="http://momsberäkning.se" className="image full-img">
            <img src={pic2} alt=""/>
          </a>
          <div className="content">
            <h2 className="major">App Momsberäkning</h2>
            <h4>React Native</h4>
            <p>
              Hybrid App to calculate VAT built in React Native and released on App Store 
            </p>
            <a href="http://momsberäkning.se" className="special">
              To homepage
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image full-img small">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Map Service</h2>
            <h4>React, Node.js</h4>
            <p>
              Map service built as an internal project to be able to share and see the location of your consultancy co-workers.
              A web app built in React, Node.js (Express.js), Material-UI and MongoDB.
            </p>
            <a href="/#" className="special">
              See more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt spotlight style4">
        <div className="inner">
          <a href="https://about.prepaird.com" className="image">
            <img src={pic4} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Recruitment Platform</h2>
            <h4>Angular JS</h4>
            <p>
              Together with one more person on the frontend, and three on the backend, 
              we built an application for staffing, recruitment, and project management 
              in a start up. The work mainly contained developing in Javascript – AngularJs, 
              CSS/LESS and HTML5, but also working with Git, Node, Gulp, Glassfish and Java.
            </p>
            <a href="https://about.prepaird.com" className="special">
              To homepage
            </a>
          </div>
        </div>
      </section>

      
    </section>
  </Layout>
);

export default IndexPage;


/*
<section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
 */