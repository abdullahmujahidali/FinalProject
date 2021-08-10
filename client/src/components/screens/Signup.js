import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import { useToasts } from 'react-toast-notifications'

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
    const { addToast } = useToasts()
    const [url, setUrl] = useState(undefined)
    useEffect(() => {
        if (url) {
            uploadFields()
        }
    })

    useEffect(() => {
        console.log("hit!")
        addToast('Invalid Email', {
            appearance: 'error'
        })
    }, [])
    const uploadPic = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "bigbrain")
        data.append("cloud_name", "bigbrain")
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            console.log(email)
            addToast('Invalid Email', {
                appearance: 'error'
            })
            return
        }
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
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            console.log(email)
            addToast('Invalid Email', {
              appearance: 'error'
            })
            return
          }
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
                    addToast('Error Encountered', {
                        appearance: 'error'
                    })
                }
                else {
                    addToast('User has joined Big Brains', {
                        appearance: 'success'
                    })
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
            <div className="font-sans antialiased bg-grey-lightest">
                <div className="w-full bg-grey-lightest" style={{ paddingTop: "4rem;" }}>
                    <div className="container mx-auto py-4">
                        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
                            <div className="py-4 px-8">
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-1">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">Full Name</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your Full Name" value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Email</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="email" placeholder="Your Email" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-1">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your Password " value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Country</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="country" type="text" placeholder="Your Country" value={country}
                                            onChange={(e) => setCountry(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-1">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">Organization</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="organization" type="text" placeholder="Your Orgaization" value={organization}
                                            onChange={(e) => setOrganization(e.target.value)} />
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Role</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="role" type="text" placeholder="Your Role" value={role}
                                            onChange={(e) => setRole(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Introduce Yourself</label>
                                    <textarea
                                        rows="2"
                                        cols="50"
                                        value={intro}
                                        onChange={(e) => setIntro(e.target.value)}
                                        className="px-3 py-3 placeholder-gray-400  text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Write a few words..."
                                    />
                                </div>
                                <div className="overflow-hidden relative w-64 mt-4 mb-4">
                                    <label className=" flex flex-col items-center px-2 py-2 bg-black text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span className="mt-2 text-base leading-normal">Upload profile picture</span>
                                        <input type='file' className="hidden" onChange={(e) => setImage(e.target.files[0])} />
                                    </label>

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
                        <p className="text-center my-4">
                            <Link to="/signin" className="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</Link>
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    );
}
