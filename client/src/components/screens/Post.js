import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../../App"
import { useParams, Link } from "react-router-dom"
import parse from "html-react-parser"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function Post() {
    function refreshPage() {
        window.location.reload();
      }
    const [userPost, setUserPost] = useState(null)
    const { state, dispatch } = useContext(UserContext)
    const [body, setBody] = useState("")
    const [data, setData] = useState([])
    const { postid } = useParams()
    useEffect(() => {
        fetch(`/post/${postid}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setUserPost(result.posts)
            })
    }, [postid])
    const makeComment = (text, postId) => {
        fetch("/comment", {
            method: "put",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id === result._id) {
                        
                        return result
                    }
                    else {
                        return item
                    }
                })
                setData(newData)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deleteComment = (postid, commentid) => {
        fetch(`/deletecomment/${postid}/${commentid}`, {
            method: "delete",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                const newData = data.map((item) => {
                    if (item._id === result._id) {
                        refreshPage();
                        return result;
                    } else {
                        return item;
                    }
                });
                setData(newData);
                refreshPage();
            });
    };
    const likePost = (postid,commentid) => {
        console.log(commentid)
        fetch(`/likecomment/${postid}/${commentid}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: commentid
            })
        }).then(res => res.json())
            .then(result => {
                const newData = data.map(item => {
                    if (item._id === result._id) {
                        console.log(result)
                        return result
                    }
                    else {
                        console.log(item)
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })

    }
    const unlikePost = (id) => {
        fetch(`/likecomment/${postid}/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id === result._id) {
                        return result
                    }
                    else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <section className="text-gray-600 body-font" key={userPost ? userPost._id : "loading"}>
                <div className="container px-12 py-20 mx-auto flex flex-col">
                    <div className="">
                        <div className="rounded-lg h-64 px-12 overflow-hidden">
                            <div className="px-12 ">
                            <div className="px-12">
                            <div className="px-12">
                            <div className="px-12">
                            <div className="px-12"> <div className="px-12">
                            <div className="px-12"> <div className="px-12">
                                <img alt="content" className="px-12" src={userPost ? userPost.photo : "loading"} />
                            </div></div></div> </div></div></div></div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" viewBox="0 0 24 24" onError={(event) => event.target.style.display = 'none'} src={userPost ? userPost.postedBy.pic : "loading"} alt="load" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{userPost ? userPost.title : "loading"}</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base"><Link to={userPost ? (userPost.postedBy._id !== state._id ? "/profile/" + userPost.postedBy._id : "/profile") : "loading"}> Posted By: {userPost ? userPost.postedBy.name : "loading"}</Link></p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">{parse(userPost ? userPost.body : "loading")}</p>
                                <div class="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg">
                                    <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2" onSubmit={(e) => {
                                        e.preventDefault()
                                        console.log(body)
                                        makeComment(body, userPost._id)
                                    }}>
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                                            <div class="w-full md:w-full px-3 mb-2 mt-2">
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
                                            </div>
                                            <div class="w-full md:w-full flex items-start md:w-full px-3">
                                                <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                                    <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p class="text-xs md:text-sm pt-px">Share your thought!</p>
                                                </div>
                                                <div class="-mr-1">
                                                    <input type='submit' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                </div>


                            </div>
                            <h1 className="font-medium title-font mt-4 mb-4 text-black text-center text-lg py-8 px-6 border-gray-900">DISCUSSION</h1>
                            {
                                userPost ?
                                    userPost.comments.map(record => {
                                        return (
                                            <>
                                                <h6 key={record._id} className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
                                                    <span style={{ fontWeight: "500" }} className="">
                                                        {record.postedBy.name} :
                                                    </span>
                                                    <span className="text-center"> {parse(record.text)}</span>
                                                </h6>

                                                <span className="text-right text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 ">
                                                    {(record.postedBy._id) === state._id && (
                                                        <i class="fas fa-trash" onClick={() => deleteComment(userPost._id, record._id)}></i>
                                                    )}

                                                    {userPost ? userPost.likes.includes(state._id)
                                                        ?
                                                        <i className="fas fa-heart "
                                                            onClick={() => { unlikePost(userPost._id, record._id) }}
                                                        ></i>
                                                        :
                                                        <i className="far fa-heart  "
                                                            onClick={() => { likePost(userPost._id, record._id) }}
                                                        ></i>
                                                        :
                                                        "loading"
                                                    }   &nbsp;
                                                    {userPost.commentLikes.length ? userPost.commentLikes.length : 0} likes
                                                </span>
                                            </>
                                        )
                                    })
                                    :
                                    "loading"
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}