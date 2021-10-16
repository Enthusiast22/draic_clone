// import React from 'react'

// const Home = () => {
//     return (
//         <div>
//             <h1 align="center">This is the HOME PAGE!!!</h1>
//         </div>
//     )
// }

// export default Home
import React from 'react';
import "./Home.css"
import fish from "../imgs/bg.png"

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
          <h2><span>Our Founder</span></h2>

          {/* <img className="profile_img" src="assets/social/social-aman.jpeg" alt="This is Aman Dhattarwal"/>
          <h3 className="profile_name">Aman Dhattarwal</h3>
          <div className="sm-handle">
              <a className="yt_handle" href="http://www.youtube.com/amandhattarwal" target="_blank"
                  rel="noopener noreferrer"><i className="fab fa-youtube fa-lg"></i>YouTube</a>
              <a className="linkdn_handle" href="http://www.linkedin.com/in/dhattarwalaman" target="_blank"
                  rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i>LinkedIn</a>
              <a className="insta_handle" href="http://www.instagram.com/dhattarwalaman" target="_blank"
                  rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i>Instagram</a>
          </div> */}

          <div className="about_us">
              <h4 className="about_title">Young TEDx speaker and #1 Online JEE Educator | Founder of 5 YouTube Channels
                  with
                  2.5 million young
                  hustlers. </h4>
              <h5 className="about_content">I help students across India find their right career path. I have been a guest
                  speaker at 22 Colleges
                  including Top IITs, BITS Pilani, IIIT's, NIT's, SRCC, Jadavpur University etc. I am the #1 Educator
                  of
                  JEE on India's biggest online platform
                  and I believe that everyone has the right to quality education and with the help of my social media
                  platforms, I have helped millions of students find their path to success in the last 5 years. In the
                  next few decades, India will rise
                  as the leader of the world with the maximum young workforce, but for this, we need some good pilots
                  who
                  can take us through this. I help these young hustlers find their true potential so that they can fly
                  us
                  to victory.</h5>
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
      <img className="people" src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      <img className="people"src={fish} alt="a" width="15%" height="20%"/>
      
  </section>
      
  </main>
  <section className="lastsecond">
  <div classname="contact">
          <p>Follow Us</p>
          <a href="#">
          <img className="social" src={fish} />
          </a>
          <a href="#">
              <img className="social" src={fish} /></a>
          <a href="#">
              <img className="social" src={fish} /></a>
          <a href="#">
              <img className="social" src={fish} /></a>
          

      </div>
      </section>

  <footer>
      
      
      <a href="#">FAQ</a>
      <a href="#">Contact Us</a>
      <a href="#">Terms of Use</a>
      <a href="#">Privacy Policy</a>
      <a href="#" className="flex-align-left">&copy; 2020 | DRAIC</a>
      
  </footer>
  
  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
</>


    )
}
export default Home;

