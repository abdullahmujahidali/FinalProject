import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black text-white pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >

        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Find us on Social Media!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-orange text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                
                  <i className="flex fab fa-twitter"></i>
                </button>
                <button
                  className="bg-orange text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-orange text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-github"></i>
                </button>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center ">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1 ">
                Copyright © {new Date().getFullYear()}{" "}Big Brains{" "}
                <a href="https://connexionmern.herokuapp.com/" className="text-blue-600 hover:text-white">Abdullah Mujahid</a>.

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
