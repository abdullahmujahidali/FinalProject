import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import M from "materialize-css"

export default function Signup() {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [organization, setOrganization] = useState("")
    const [role, setRole] = useState("")
    const [intro, setIntro] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState(undefined)
    useEffect(() => {
        if (url) {
            uploadFields()
        }
    })
    const uploadPic = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "bigbrain")
        data.append("cloud_name", "bigbrain")
        fetch("https://api.cloudinary.com/v1_1/bigbrain/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.url)
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })

    }
    const uploadFields = () => {
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
                pic: url,
                intro
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#004d40 teal darken-4" })
                }
                else {
                    M.toast({ html: data.message, classes: "#000000 black white-text" })
                    history.push("/signin")
                }
            }).catch(err => {
                console.log(err)
            })
    }
    const PostData = () => {
		if (image) {
			uploadPic()
		}
		else {
			uploadFields()
		}

	}

    return (
        <>
            <div class="font-sans antialiased bg-grey-lightest">



                <div class="w-full bg-grey-lightest" style={{ paddingTop: "4rem;" }}>
                    <div class="container mx-auto py-4">
                        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
                            <div class="py-4 px-8">
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">Full Name</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your Full Name" value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="email" placeholder="Your Email" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your Password " value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Country</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="country" type="text" placeholder="Your Country" value={country}
                                            onChange={(e) => setCountry(e.target.value)} />
                                    </div>
                                </div>
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">Organization</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="organization" type="text" placeholder="Your Orgaization" value={organization}
                                            onChange={(e) => setOrganization(e.target.value)} />
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Role</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="role" type="text" placeholder="Your Role" value={role}
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
                                <div class="overflow-hidden relative w-64 mt-4 mb-4">
                                    <button class="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 w-full inline-flex items-center">
                                        <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                                        </svg>
                                        <span className="mt-2 text-base leading-normal">Upload Profile Picture</span>
                                        <input className="hidden cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t" type="file" onChange={(e) => setImage(e.target.files[0])} />
                                    </button>
                          
                                    
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
                            <Link to="/signin" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</Link>
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
