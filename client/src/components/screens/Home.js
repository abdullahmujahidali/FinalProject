import React from "react"
import {Link} from "react-router-dom"
import Footer from "./Footer"
const Home =()=>{
    return (
        <>
        <header>
            <div className="container text-center">
      <div className="row">
        <div className="col-md-7 col-sm-12  text-white">
          <h6>AUTHOR: Abdullah Mujahid</h6>
          <h1>NEED HELP!</h1>
          <p>
           Join <strong>BigBrains</strong> and help us grow the largest learning platform where you can share your insight regarding something or help others with their problems.
           Covering maximum number of audience by offering a network of different subjects which will help all the student body now you don’t have to visit any other platform 
           pay nothing for everything we offer.
           <br />
           So why wait?
          </p>
          <button className="btn btn-dark px-5 py-2 primary-btn">
            <Link to ="/SignUp">Sign Up</Link>
          </button>
          &nbsp;
          <button className="btn btn-danger px-5 py-2 primary-btn ">
          <Link to ="/SignIn">Sign In</Link>
          </button>
        </div>
        <div className="col-md-5 col-sm-12  h-25">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Brain_Food_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif/768px-Brain_Food_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" alt="Book" />
        </div>
      </div>
    </div>
        </header>
        <main>
        <section className="section-1">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="pray">
                  <img src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Pray" className="" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="panel text-center">
                  <h1>Big Brains</h1>
                  <center><h3>ABOUT BIG BRAINS</h3></center>
                  <p className="pt-4">
                    Big-brains is an e-learning social network that will provide a student interconnected learning platform that is backed up by students
                    and educational professionals helping each other to solve problems and exploring new things. Big-brains is not restricted to a single educational domain.
                  </p>
                  <p>
                    It is a collective network which offers students from different domains to ask questions or share their explorations with the world.
                    Big-Brains is not just dedicated to a single subject. The mission of the big-brains is to cover the maximum subject group so that a 
                    questioner doesn’t have to wander to other internet resources to find the solution to his/her problem. 
                    The mission of the big-brains is to cover the maximum subject group so that a questioner doesn’t have to wander to other internet resources to find the solution 
                    to his/her problem. At Big-Brains not only students help each other out but industrial and educational professionals will strive hard to help the questioner to find the solution. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2 container-fluid p-0">
      <div className="cover">
        <div className="overlay"></div>
        <div className="content text-center">
          <h1>Some Features That Made Us Unique</h1>
          <p>
            Look at the numbers that we have reached on BigBrains!
          </p>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div className="rect">
            More than 
            <h1>30</h1>
            <p>Subjects</p>
          </div>
          <div className="rect">
            More than 
            <h1>250</h1>
            <p>Educational Proffesionals</p>
          </div>
          <div className="rect">
            More than 
            <h1>90</h1>
            <p>Industrial Professionals</p>
          </div>
        </div>
      </div>

    </section>
    <section className="section-3 container-fluid p-0 text-center">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h1>COMING SOON</h1>
          <p>
            Big Brains right now aims to target the web audience soon it will be aiming to launch its cross platform application that will increase the ease of user everything will be just a touch away.
            <br />
            Stay tunned.
          </p>
        </div>
      </div>
      <div className="platform row">
        <div className="col-md-6 col-sm-12 text-right">
          <div className="desktop shadow-lg">
            <div className="d-flex flex-row justify-content-center">
              <i className="fab fa-apple fa-3x py-2 pr-3"></i>
              <div className="text text-left">
                <h3 className="pt-1 m-0">BigBrains</h3>
                <p className="p-0 m-0">On App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 text-left">
          <div className="desktop shadow-lg">
            <div className="d-flex flex-row justify-content-center">
              <i className="fab fa-android fa-3x py-2 pr-3"></i>
              <div className="text text-left">
                <h3 className="pt-1 m-0">BigBrains</h3>
                <p className="p-0 m-0">On Play Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="section-4">
      <div className="container text-center">
        <h1 className="text-dark">Listen to our members</h1>
        <p className="text-secondary">What they say about BigBrains.</p>
      </div>
      <div className="team row ">
        <div className="col-md-4 col-12 text-center">
        
          <div className="card mr-2 d-inline-block shadow-lg">
                
              <div className="card-img-top">
                 
                  <img src="../assets/UI-face-3.jpg" className="img-fluid border-radius p-4" alt="u" />
                </div>
                <div className="card-body">
                 
                  <h3 className="card-title">Adam Sandler</h3>
                  <p className="card-text">
                    Big Brains made my life easier now I don't have to post my questions in facebook groups or at other protals where I have to pay to get answer
                  </p>
                  <a href="#" className="text-secondary text-decoration-none">Profile</a>
                  <p className="text-black-50">Student at Yales</p>
                </div>
              </div>
        </div>
        <div className="col-md-4 col-12">
            <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <div className="card mr-2 d-inline-block shadow">
                      <div className="card-img-top">
                        <img src="../assets/UI-face-1.jpg" className="img-fluid rounded-circle w-50 p-4" alt="s" />
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Allen Agnes</h3>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                          minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                        </p>
                        <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                        <p className="text-black-50">CEO at Google</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card  d-inline-block mr-2 shadow">
                      <div className="card-img-top">
                        <img src="../assets/UI-face-2.jpg" className="img-fluid rounded-circle w-50 p-4" alt="" />
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Amiel Barbara</h3>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                          minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                        </p>
                        <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                        <p className="text-black-50">CEO at Google</p>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
        </div>
        <div className="col-md-4 col-12 text-center">
            <div className="card mr-2 d-inline-block shadow-lg">
                <div className="card-img-top">
                  <img src="../assets/UI-face-4.jpg" className="img-fluid border-radius p-4" alt=""/>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Olivia Louis</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                    minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                  </p>
                  <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                  <p className="text-black-50">CEO at Google</p>
                </div>
              </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
        </>
    )
}

export default Home