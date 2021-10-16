
import React from 'react';
import "./Home.css"
import person from "../imgs/person.png"
import lin from "../imgs/linkedin.webp"
import insta from "../imgs/insta.png"
import fb from "../imgs/fb.png"
import gmail from "../imgs/gmail.png"
import fish from "../imgs/bg_dark.jpg"
function Home(){
    return(

    <>

  <main>
      <header>
          <div className="background">
              <h1>DRAIC</h1></div>
      </header>
      {/* <section>
          <h2><span>Courses</span></h2>
         
          <div className="carousel js-flickity" data-flickity='{"wrapAround": true }'>
              <div className="carousel-cell"><video src="assets/courses/webdev/lectures/html.mp4"
                      poster="assets/courses/webdev/thumbnail/webdev.png" controls></video></div>
              <div className="carousel-cell"><video src="assets/courses/chemistry/lectures/electrochemistry.mp4"
                      poster="assets/courses/chemistry/thumbnail/electrochemistry.jpg" controls></video>
              </div>
              <div className="carousel-cell"><video src="assets/courses/maths/lectures/maths.mp4"
                      poster="assets/courses/maths/thumbnail/maths.jpg" controls></video></div>
              <div className="carousel-cell"><video src="assets/courses/python/lectures/python-lec1.mp4"
                      poster="assets/courses/python/thumbnail/python-lec1.jpg" controls></video></div>
              <div className="carousel-cell"><video src="assets/courses/cpp/lectures/cpp.mp4"
                      poster="assets/courses/cpp/thumbnail/cpp.jpg" controls></video></div>
          </div>
      </section>
      <section>
          <h2><span>College Reviews</span></h2>
          
          <div className="carousel js-flickity" data-flickity-options='{ "wrapAround": true }'>
              <div className="carousel-cell iframe-container"><iframe src="https://www.youtube.com/embed/1VfqlKtVF7U"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
              </div>
              <div className="carousel-cell iframe-container"><iframe src="https://www.youtube.com/embed/zGJ5BlbKfLM"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe></div>
              <div className="carousel-cell iframe-container"><iframe src="https://www.youtube.com/embed/j0biLzzJ2XQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe></div>
          </div>
      </section> */}
      <section className="our_founder">
          <h2><span>About Us</span></h2>

          

          <div className="about_us">
              <h4 className="about_title">D. Y. Patil Robotics & AI Club is a group of highly dedicated individuals, from all engineering disciplines, working passionately in the field of Robotics & AI to take the college (DYPCOE, Pune) to new heights in this field. The Club focuses on the development of students through working on various robotic projects and also participating in National as well as International level Competitions. </h4>
              <h5 className="about_content">


VISION  :   
To achieve an excellence in the field of robotics and AI, Thus contributing towards the development of the nation.

MISSION  :                                                                                                                                                                                                                                                                                                           
DRAIC
Team DRAIC seeks to inspire the next generation of bright minds, to cultivate an appreciation for the present technology and develop a cognitive thinking towards the solutions to present scenario by engaging in competition and building innovative projects.

 
</h5>
          </div>
          
      </section>
      {/* <section className="study_material">
          <h2><span>Team</span></h2>
         
          <div className="carousel js-flickity" data-flickity-options='{ "wrapAround": true }'>
              <div className="carousel-cell">
              <img className="people" src={fish} alt="Logo Apni Kaksha"/>
                  <a target="_blank" href="assets/courses/chemistry/notes/Class 12 Solution Complete NCERT.pdf"><img
                          className="img-responsive"
                          src="assets/courses/chemistry/notes/Class 12 Solution Complete NCERT.png"/></a> 
              </div>
              <div className="carousel-cell">
              <img className="people" src={fish} alt="Logo Apni Kaksha"/>
                   <a target="_blank"
                      href="assets/courses/chemistry/notes/Solid State New Complete Chapter Notes.pdf"><img
                          className="img-responsive"
                          src="assets/courses/chemistry/notes/Solid State New Complete Chapter Notes.jpg" alt=""/></a> 
              </div>
              <div className="carousel-cell">
              <img className="people" src={fish} alt="Logo Apni Kaksha"/>
                   <a target="_blank" href="assets/courses/chemistry/notes/Electrochemistry  Complete NCERT.pdf"><img
                          className="img-responsive"
                          src="assets/courses/chemistry/notes/Electrochemistry  Complete NCERT.jpg"/></a> 
              </div>
              <div className="carousel-cell">
              <img className="people" src={fish} alt="Logo Apni Kaksha"/>
                   <a target="_blank" href="assets/notes/Coordination Compound 3.pdf"><img className="img-responsive"
                          src="assets/courses/chemistry/notes/Coordination Compound 3.jpg"/></a> 
              </div>
              </div>
      </section> */}
     <section className="study_material">
      <h2><span>Team</span></h2>
      <img className="people" src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      <img className="people"src={person} alt="a" width="15%" height="20%"/>
      
  </section>
      
      
  </main>
  <section className="lastsecond">
  <div classname="contact">
          <p>Follow Us</p>
          <a target="_blank" href="https://in.linkedin.com/company/d-y-patil-robotics-ai-club" >
          <img className="social" src={lin} />
          </a>
          <a target="_blank" href="https://www.instagram.com/draicdypcoe/">
              <img className="social" src={insta} /></a>
          <a target="_blank" href="https://www.facebook.com/draicdypcoe/">
              <img className="social" src={fb} /></a>
          <a target="_blank" href="#">
              <img className="social" src={gmail} /></a>
          

      </div>
      </section>

  <footer>
      
      
      <a href="#">FAQ</a>
      <a href="#">Contact Us</a>
      <a href="#">Terms of Use</a>
      <a href="#">Privacy Policy</a>
      <a href="#" className="flex-align-left">&copy; 2020 D. Y. Patil Robotics & AI Club

All rights reserved.C</a>
      
  </footer>
  
  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
</>


    )
}
export default Home;

