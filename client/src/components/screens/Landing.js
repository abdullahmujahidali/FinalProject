import React,{useEffect} from "react";
import { Link } from "react-router-dom"
import bground from "../assets/bg.jpg"
import team4 from "../assets/abdullah.jfif"
import team3 from "../assets/rahib.jfif"

import Footer from "../Footer"

import team2 from "../assets/amna.jfif"
import team1 from "../assets/habiba.jfif"
import aboutPic from "../assets/about.jpg"
import Aos from "aos";
import "aos/dist/aos.css";


export default function Landing() {
  useEffect(()=>{
    Aos.init({
      delay:200,
      duration: 2000,
      once: false
    });
  },[])
  return (
    <>

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "95vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${bground})`
            }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-10">
                  <h1 className="text-white font-semibold text-4xl">
                    Tired of searching over the <span className="text-red-500">internet? </span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                  Join <strong>BigBrains</strong> and help us grow the largest learning platform where you can share your insight regarding something or help others with their problems.
                  Covering maximum number of audience by offering a network of different subjects which will help all the student body now you don’t have to visit any other platform 
                  pay nothing for everything we offer.
                    </p>
                  <Link to="/signup" className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 border border-orange-500 hover:border-transparent  px-12 rounded inline-block mt-5">Sign Up    !</Link>
              &nbsp;&nbsp;
              <Link to="/signin" className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent  px-12 rounded inline-block mt-5">Sign In    !</Link>
                </div>
              </div>

            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>


        <section className="relative py-20 bg-black text-white">


          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="fade-right">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={aboutPic}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
                <div className="md:pr-12">
                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-brain text-xl"></i>
                  </div>
                  <small className="uppercase mr-3">&nbsp; &nbsp;About big brains</small>
                  <h3 className="text-3xl font-sbold">
                    STRIVE FOR PROGRESS
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed ">
                    A collective network which offers students from different domains to ask questions or share their
                    explorations with the world. Big-Brains is not just dedicated to a single subject. The mission of
                    the big-brains is to cover the maximum subject group so that a questioner doesn’t have to wander
                    to other internet resources to find the solution to his/her problem.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-orange-500 bg-black mr-3">
                            <i className="fas fa-hard-hat fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">
                            Followers and Adherence System
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-black mr-3">
                            <i className="fas fa-users fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">Expert Growing Network</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-black mr-3">
                            <i className="far fa-paper-plane fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl"> Dynamic Routing</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Meet our Team
                </h2>
                <p className="text-lg leading-relaxed m-4 ">
                  Our team is made out of individuals who are reliant on one another, run after compatible accomplishments,
                  and offer normal achievements. A team functions in general together to accomplish certain things.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team1}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Habiba Naeem
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Backend Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team2}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Amna Ramzan
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Backend Developers
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team3}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Rahib Nazir Butt
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team4}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Abdullah Mujahid
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Full Stack React Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <a href="https://dribbble.com/abdullahmujahidali">   <i className="fab fa-dribbble"></i> </a>
                      </button>
                      <button
                        className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <a href="https://github.com/abdullahmujahidali">  <i className="fab fa-github"></i> </a>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                       <a href="https://twitter.com/abdulladgaf"> <i className="fab fa-twitter"></i> </a>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button" 
                      >
                      <a href="https://www.instagram.com/abdullahmujahidali/">  <i className="fab fa-instagram"></i></a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-black text-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white uppercase">
                  Contact Us
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4">
                  Contact Us to ask any question related to project, any consulation or anything
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  No more Redundant Load
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Reduced the amount of load this is done and checked when user is trying to create a post. He/She is notified if such post is already created.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your profile
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Providing all the necessary social media components that are sufficient to build your profile.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Hybrid mobile application available for both iPhone and Android.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-black  ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300" data-aos="fade-up-right">
                  <div className="flex-auto p-5 lg:p-10 bg-blue-600 text-white">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 ">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase  text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase  text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase  text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400  text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
