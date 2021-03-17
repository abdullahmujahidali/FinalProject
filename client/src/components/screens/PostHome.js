import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import Footer from "../Footer.js";
import parse from "html-react-parser"
import pofilePic from "../assets/abdullah.jfif"
import { UserContext } from "../../App"

export default function PostHome() {
  const [data, setData] = useState([])
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        // console.log(result)
        setData(result.posts)
      })
  }, [])
  const delelePost = (postid) => {
    fetch(`/deletepost/${postid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        const newData = data.filter(item => {
          return item._id !== result._id
        })
        setData(newData)
      })
  }
  const likePost = (id) => {
    fetch("/like", {
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
    fetch("/unlike", {
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
      <section className="bg-white text-black body-font overflow-hidden ">
        <div className="container px-5 pb-32 pt-2 mx-auto">
          <h1 className="sm:text-2xl text-5xl title-font font-medium mt-4 mb-4 extra-bold text-center rounded-xl">POSTS</h1>
          <div className="flex-wrap -m-12 ">
            {
              data.map(item => {
                return (
                  <>
                    <br />
                    <div className="p-12 md:w-1/2 flex flex-col items-start shadow-2xl px-8 py-4 " key={item._id}>
                      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{item.subject}</span>
                      <h2 className="sm:text-3xl text-2xl title-font font-medium mt-4 mb-4"><Link to={"/post/" + item._id}> {item.title} </Link></h2>
                      <p className="leading-relaxed mb-8">  {parse(item.body)} </p>
                      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <Link className="text-indigo-500 inline-flex items-center"> <Link to={"/post/" + item._id}>Read More </Link>
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                        <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200  ">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                           
                          </svg>{item.likes.length} likes
                        {item.likes.includes(state._id)
                            ?
                            <i class="fas fa-heart fa-2x"
                              onClick={() => { unlikePost(item._id) }}
                            ></i>
                            :
                            <i class="far fa-heart fa-2x "
                              onClick={() => { likePost(item._id) }}
                            ></i>
                          }
                        </span>
                        <span className="text-red-700 inline-flex items-center leading-none text-sm">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          {item.postedBy._id === state._id && <i class="fas fa-trash fa-2x" onClick={() => delelePost(item._id)}></i>}
                        </span>
                      </div>
                      <Link className="inline-flex items-center">
                        <img alt="blog" src={item ?item.postedBy.pic : "loading"} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium"> <Link to={item.postedBy._id !== state._id ? "/profile/" + item.postedBy._id : "/profile"}> {item.postedBy.name}</Link></span>
                          <span className="text-black text-xs tracking-widest mt-0.5">{item.postedBy.role}, {item.postedBy.organization}</span>
                        </span>
                      </Link>

                      <br />

                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
