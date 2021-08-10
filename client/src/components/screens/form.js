import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import bground from "../assets/loginBg.png"
import logoP from "../assets/logosm.png"
import M from "materialize-css"
import FooterSmall from "../FooterSmall.js";

export default function SignUpForm() {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [organization, setOrganization] = useState("")
    const [role, setRole] = useState("")
    const [intro, setIntro] = useState("")
    const [image,setImage]= useState("")
    const [url,setUrl]= useState("")

    
    const PostData = () => {
        fetch('/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
                country,
                organization,
                role,
                intro
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    <div class="absolute right-0 top-0 m-5">
                        <div class="flex items-center bg-orange-400 border-l-4 border-orange-700 py-2 px-3 shadow-md mb-2">

                            <div class="text-orange-500 rounded-full bg-white mr-3">
                                <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                </svg>
                            </div>

                            <div class="text-white max-w-xs ">
                                {data.error}
                            </div>
                        </div>
                    </div>

                }
                else {
                    <div class="absolute right-0 top-0 m-5">
                        <div class="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">

                            <div class="text-green-500 rounded-full bg-white mr-3">
                                <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                                </svg>
                            </div>

                            <div class="text-white max-w-xs ">
                                {data.message}
                            </div>
                        </div>
                    </div>
                    console.log(data.message)
                    history.push("/signin")

                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <>
            <div class="font-sans antialiased bg-grey-lightest">

               
                
                <div class="w-full bg-grey-lightest" style={{paddingTop: "4rem;"}}>
                    <div class="container mx-auto py-4">
                        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
                            <div class="py-4 px-8">
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">Full Name</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your Full Name"  value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="email" placeholder="Your Email"  value={email}
                                                    onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your Password "  value={password}
                                                    onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Country</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="country" type="text" placeholder="Your Country"  value={country}
                                                    onChange={(e) => setCountry(e.target.value)} />
                                    </div>
                                </div>
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">Organization</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="organization" type="text" placeholder="Your Orgaization" value={organization}
                                                    onChange={(e) => setOrganization(e.target.value)}/>
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Role</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="role" type="text" placeholder="Your Role"  value={role}
                                                    onChange={(e) => setRole(e.target.value)} />
                                    </div>
                                </div>
                                <div class="mb-4">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Introduce Yourself</label>
                                        <textarea
                                                    rows="2"
                                                    cols="50"
                                                    value={intro}
                                                    onChange={(e) => setIntro(e.target.value)}
                                                    className="px-3 py-3 placeholder-gray-400  text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Write a few words..."
                                                />
                                    </div>
                                <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                    onClick={() => PostData()}
                                                >
                                                    Sign Up
                                             </button>
                                            </div>
                            </div>
                        </div>
                        <p class="text-center my-4">
                            <a href="#" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
                        </p>
                    </div>
                </div>
                <footer class="w-full bg-grey-lighter py-8">
                <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-black font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://connexionmern.herokuapp.com/"
                  className="text-black hover:text-red-500 text-sm font-semibold py-1"
                >
                  Abdullah Mujahid
                </a>
              </div>
            </div>
                </footer>
            </div>
        </>
    );
}
