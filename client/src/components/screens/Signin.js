import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom"
import { UserContext } from "../../App"

import logoP from "../assets/logoBlack.png"
import M, { toast } from "materialize-css"
import FooterSmall from "../FooterSmall.js";
import { useToasts } from 'react-toast-notifications'
// import "../../App.css"

export default function SignIn() {
  const { addToast } = useToasts()
  const { dispatch } = useContext(UserContext)
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const PostData = () => {

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      M.toast({ html: 'Invalid email', classes: '#0000FF' })
      addToast('Sign in Success', {
        appearance: 'success'
      })
     
      alert("Invalid email");
      return
    }
    fetch('/signin', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password,
        email,
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          addToast('Sign in Success', {
            appearance: 'success'
          })

          M.toast({ html: data.error, classes: '#0d47a1 red darken-3' })
        }
        else {
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          dispatch({ type: "USER", payload: data.user })
          addToast('Sign in Success', {
            appearance: 'success'
          })

          // M.toast({ html: "Login Success", classes: 'rounded' });
          history.push('/home')
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-transparent"
            style={{
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className="container mx-auto px-8 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                  <div className="rounded-t mb-0 px-12 py-6">
                    <img
                      alt="..."
                      className=" rounded-lg px-12 "
                      src={logoP}
                    />
                    <div className="text-center mb-3">

                      <h6 className="text-gray-600 text-sm font-bold center">
                        Sign In
                      <br />

                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                      <div className="relative w-full mb-2">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            <a href="/reset">  Forgot Password?</a>
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => PostData()}
                        >
                          Sign In
                        </button>
                        <p class="text-center my-4">
                          <Link to="/signup" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I don't have an account</Link>
                        </p>

                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
