import React, { useEffect, useState, useRef, useContext } from "react";
import { useHistory, Link } from "react-router-dom"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import M from "materialize-css"
import { UserContext } from "../../App"

export default function CreatePost() {
    const [email, setEmail] = useState("")
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [value, setValue] = useState('');
    const [userDetails, setUserDetails] = useState([])
    const searchModal = useRef(null)
    const { state, dispatch } = useContext(UserContext)
    const [image, setImage] = useState("")
    const [showModal, setShowModal] = React.useState(false);
    const [url, setUrl] = useState(undefined)
    const [body, setBody] = useState("")
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
        fetch("/createpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                subject: value,
                title,
                body,
                photo: url,

            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#004d40 teal darken-4" })
                }
                else {
                    M.toast({ html: "Post created", classes: "#03a9f4 light-blue" })
                    history.push("/home")
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
    const fetchUsers = (query) => {
        setEmail(query.trim())

        fetch("/search-post", {
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
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <div className="relative inline-flex">
                    <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
                    <h3 className="px-2">Choose Category: </h3>
                    <br />
                    <select className="px-2 border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none content-center"
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <option  >Choose a Category</option>
                        <option value="Applied Arts">Applied Arts</option>
                        <option value="Biology">Biology</option>
                        <option value="Business">Business & Administration</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Engineering">Engineering</option>
                        <option value="English">English</option>
                        <option value="Foreign Language">Foreign Language</option>
                        <option value="General">General</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics ">Physics</option>
                        <option value="Social Sciences">Social Sciences</option>
                        <option value="World History">World History</option>
                    </select>
                </div>
                <br />
                <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    spellCheck="false" placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className="App">
                    <div className="editor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={body}
                            onChange={(event, editor) => {
                                // setBody(event.target.body)
                                const data = editor.getData()
                                setBody(data)
                                console.log(data)
                            }
                            }
                        />
                    </div>
                </div>
                <br />
                <div className="flex  items-center justify-center bg-grey-lighter">
                    <label className=" flex flex-col items-center px-2 py-2 bg-black text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">Select an image</span>
                        <input type='file' className="hidden" onChange={(e) => setImage(e.target.files[0])} />
                    </label>
                </div>
                <div className="buttons flex">
                    <div className="btn border border-gray-300 p-1 px-4 mt-2 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                    <div className="btn border border-red-300 p-1 px-4  mt-2 font-semibold cursor-pointer text-gray-200 ml-2 bg-black" onClick={() => setShowModal(true)}>Review Post</div>
                    <div className="btn border border-indigo-500 p-1 px-4  mt-2 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" onClick={() => PostData()}>Post</div>
                </div>
            </div>

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
                                    value={title}
                                    onChange={(e) => fetchUsers(e.target.value)}
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
    )
}