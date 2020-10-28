import React from "react"
import {Link} from "react-router-dom"
const Home =()=>{
    return (
        <>
        <header>
            <div class="container text-center">
      <div class="row">
        <div class="col-md-7 col-sm-12  text-white">
          <h6>AUTHOR: Abdullah Mujahid</h6>
          <h1>NEED HELP!</h1>
          <p>
           Join <strong>BigBrains</strong> and help us grow the largest learning platform where you can share your insight regarding something or help others with their problems.
           Covering maximum number of audience by offering a network of different subjects which will help all the student body now you don’t have to visit any other platform 
           pay nothing for everything we offer.
           <br />
           So why wait?
          </p>
          <button class="btn btn-dark px-5 py-2 primary-btn">
            <Link to ="/SignUp">Sign Up</Link>
          </button>
          &nbsp;
          <button class="btn btn-danger px-5 py-2 primary-btn ">
          <Link to ="/SignIn">Sign In</Link>
          </button>
        </div>
        <div class="col-md-5 col-sm-12  h-25">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Brain_Food_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif/768px-Brain_Food_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" alt="Book" />
        </div>
      </div>
    </div>
        </header>
        <main>
        <section class="section-1">
          <div class="container text-center">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="pray">
                  <img src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Pray" class="" />
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="panel text-center">
                  <h1>Big Brains</h1>
                  <center><h3>ABOUT BIG BRAINS</h3></center>
                  <p class="pt-4">
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
        <section class="section-2 container-fluid p-0">
      <div class="cover">
        <div class="overlay"></div>
        <div class="content text-center">
          <h1>Some Features That Made Us Unique</h1>
          <p>
            Look at the numbers that we have reached on BigBrains!
          </p>
        </div>
      </div>
      <div class="container-fluid text-center">
        <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div class="rect">
            More than 
            <h1>30</h1>
            <p>Subjects</p>
          </div>
          <div class="rect">
            More than 
            <h1>250</h1>
            <p>Educational Proffesionals</p>
          </div>
          <div class="rect">
            More than 
            <h1>90</h1>
            <p>Industrial Professionals</p>
          </div>
        </div>
      </div>

    </section>
    <section class="section-3 container-fluid p-0 text-center">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h1>COMING SOON</h1>
          <p>
            Big Brains right now aims to target the web audience soon it will be aiming to launch its cross platform application that will increase the ease of user everything will be just a touch away.
            <br />
            Stay tunned.
          </p>
        </div>
      </div>
      <div class="platform row">
        <div class="col-md-6 col-sm-12 text-right">
          <div class="desktop shadow-lg">
            <div class="d-flex flex-row justify-content-center">
              <i class="fab fa-apple fa-3x py-2 pr-3"></i>
              <div class="text text-left">
                <h3 class="pt-1 m-0">BigBrains</h3>
                <p class="p-0 m-0">On App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-left">
          <div class="desktop shadow-lg">
            <div class="d-flex flex-row justify-content-center">
              <i class="fab fa-android fa-3x py-2 pr-3"></i>
              <div class="text text-left">
                <h3 class="pt-1 m-0">BigBrains</h3>
                <p class="p-0 m-0">On Play Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section-4">
      <div class="container text-center">
        <h1 class="text-dark">Listen to our members</h1>
        <p class="text-secondary">What they say about BigBrains.</p>
      </div>
      <div class="team row ">
        <div class="col-md-4 col-12 text-center">
        
          <div class="card mr-2 d-inline-block shadow-lg">
                
              <div class="card-img-top">
                 
                  <img src="../assets/UI-face-3.jpg" class="img-fluid border-radius p-4" alt="u" />
                </div>
                <div class="card-body">
                 
                  <h3 class="card-title">Adam Sandler</h3>
                  <p class="card-text">
                    Big Brains made my life easier now I don't have to post my questions in facebook groups or at other protals where I have to pay to get answer
                  </p>
                  <a href="#" class="text-secondary text-decoration-none">Profile</a>
                  <p class="text-black-50">Student at Yales</p>
                </div>
              </div>
        </div>
        <div class="col-md-4 col-12">
            <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
                <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                    <div class="card mr-2 d-inline-block shadow">
                      <div class="card-img-top">
                        <img src="../assets/UI-face-1.jpg" class="img-fluid rounded-circle w-50 p-4" alt="s" />
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">Allen Agnes</h3>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                          minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                        </p>
                        <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                        <p class="text-black-50">CEO at Google</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card  d-inline-block mr-2 shadow">
                      <div class="card-img-top">
                        <img src="../assets/UI-face-2.jpg" class="img-fluid rounded-circle w-50 p-4" alt="" />
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">Amiel Barbara</h3>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                          minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                        </p>
                        <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                        <p class="text-black-50">CEO at Google</p>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
        </div>
        <div class="col-md-4 col-12 text-center">
            <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <img src="../assets/UI-face-4.jpg" class="img-fluid border-radius p-4" alt=""/>
                </div>
                <div class="card-body">
                  <h3 class="card-title">Olivia Louis</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                    minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                  </p>
                  <a href="#" class="text-secondary text-decoration-none">Go somewhere</a>
                  <p class="text-black-50">CEO at Google</p>
                </div>
              </div>
        </div>
      </div>
    </section>
  </main>

        </>
    )
}

export default Home