import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom"
import Footer from "../Footer.js";


export default function PostHome() {
    const [email,setEmail] = useState("")
    const [boV, setValue] = useState('');
    const [userDetails, setUserDetails] = useState([])
    const searchModal = useRef(null)
    const [showModal, setShowModal] = React.useState(false);

    const subjectPost = (query) => {
        setEmail(query.toString().trim())
        fetch("/search-subject", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query
            })
        }).then(res => res.json())
            .then(results => {
                setUserDetails(results.post)
            })
    }
    return (
        <>
            <section className="bg-white text-black body-font overflow-hidden ">
                <div className="container px-5 pb-32 pt-2 mx-auto">
                    <h1 className="sm:text-2xl text-5xl title-font font-medium mt-4 mb-4 extra-bold text-center rounded-xl">POSTS</h1>
                    <div className="relative inline-flex">

                        <h3 className="px-2 text-2xl px-2 ">
                            Choose Category: </h3>
                        <br />
                        <select className="px-2 border border-blue-600 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none content-center"
                            onChange={(e) => setValue(e.target.value)}
                        >
                            <option  >Choose a Category</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Biology">Biology</option>
                            <option value="Physics ">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="English">English</option>
                            <option value="World History">World History</option>
                            <option value="General">General</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Applied Arts">Applied Arts</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Foreign Language">Foreign Language</option>
                            <option value="Business">Business & Administration</option>
                            <option value="Social Sciences">Social Sciences</option>
                        </select>
                    </div>
                    <div className="buttons flex px-12">
                        <div className="btn border border-red-300 p-1 px-4  mt-2 font-semibold cursor-pointer text-gray-200 ml-2 bg-black" onClick={() => { setShowModal(true) }} >View Subject Post</div>
                    </div>

                </div>
            </section>
            <Footer />
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                        ref={searchModal}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-2xl font-semibold">
                                        Checking Existing Posts!
                  </h3>

                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                    </span>
                                    </button>

                                </div>

                                <div className="flex items-start justify-between p-5 border-b border-solid border-red-300 rounded-t ">
                                    <h2>Post with exsiting title will appear review them first before creating post <h3> <strong>Hit backspace in the field below to see results</strong></h3>
                                        <h3 className="text-blue-600">If nothing appear means your post is unique!</h3>
                                    </h2>

                                </div>
                                <input
                                    type="text"
                                    value={boV}
                                    onChange={(e) => subjectPost(e.target.value)}
                                    className="px-8 py-3 placeholder-gray-400 text-white bg-black  ml-8 mr-8 mt-8 rounded text-sm shadow focus:outline-none focus:shadow-outline "
                                    placeholder="Search Post"
                                    style={{ transition: "all .15s ease" }}

                                />
                                <h3 className="text-2xl font-semibold text-center mb-2 mt-2 ">RESULTS</h3>
                                <div className="relative p-6 flex-auto ">
                                    <ul className="collection " style={{ width: "100%" }}>
                                        {userDetails.map(item => {
                                            return <Link to={"/post/" + item._id} onClick={() => {
                                                setEmail('')
                                                setShowModal(false)
                                            }}> <li className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"><p><strong>{item.subject}:   </strong></p> &nbsp; &nbsp;  {item.title}</li></Link>
                                        })}

                                    </ul>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}


        </>
    );
}


