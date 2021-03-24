import React, { useState } from "react";
import { Link,useHistory,useParams } from "react-router-dom"
import M from "materialize-css"
import "../../App.css"

export default function SignIn() {
  const history = useHistory()
  const [password, setPassword] = useState("")
  const {token} = useParams()
  
  const PostData = () => {
    fetch('/new-password', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password,
        token
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
                                backgroundImage: `url('https://equilibrium-security.co.uk/wp-content/uploads/2019/06/pw.jpg')`
                            }}>

                        </div>

                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl"><strong>Update Password!</strong></h3>
                                <p className="mb-4 text-sm text-gray-700">
                                    Lets update the password now!
                        </p>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Password
                            </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="password"
                                        placeholder="Enter New Password: "
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                        type="button" onClick={() => PostData()}
                                    >
                                        Update Password
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
    </>
)
}