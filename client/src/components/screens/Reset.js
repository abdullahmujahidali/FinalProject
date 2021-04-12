import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import FooterSmall from "../Footer.js";
import M from "materialize-css"

export default function Reset() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const PostData = () => {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            alert.show("Oh invalid email");
            M.toast({ html: 'Invalid email', classes: '#0d47a1 red darken-4' })
            alert("Invalid email");
            return
        }
        fetch('/reset-password', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                     M.toast({html: data.error,classes:'#0d47a1 red darken-3'})
                }
                else {
                    M.toast({ html: data.message, classes: '#0d47a1 blue darken-4' });
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    
    return (
        <>

            <body className="font-mono bg-gray-400 py-16">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">

                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                                style={{
                                    backgroundImage: `url('https://www.itshneg.com/wp-content/uploads/2018/07/password-logo-min.gif')`
                                }}>

                            </div>

                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <div className="px-8 mb-4 text-center">
                                    <h3 className="pt-4 mb-2 text-2xl"><strong>Forgot Your Password?</strong></h3>
                                    <p className="mb-4 text-sm text-gray-700">
                                        We get it, stuff happens. Just enter your email address below and we'll send you a
                                        link to reset your password!
							</p>
                                </div>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                            Email
								</label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Enter Email Address..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                            type="button" onClick={() => PostData()}
                                        >
                                            Reset Password
								</button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/signup"
                                        >
                                            Create an Account!
								</Link>
                                    </div>
                                    <div className="text-center">
                                    <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/signin"
                                        >
                                            Already have an account? Login!
								</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <FooterSmall/>
        </>
    )
}