import React, { useEffect, useState,useContext } from "react";
import Footer from "../Footer.js";
import parse from "html-react-parser"
import {UserContext} from "../../App"
import {useParams,Link} from "react-router-dom"
export default function Profile() {
  const [userProfile, setProfile] = useState(null)
  const { state, dispatch } = useContext(UserContext)
  const { userid } = useParams()
  const [showfollow,setShowFollow]= useState(state?!state.following.includes(userid):true)
  useEffect(() => {
    fetch(`/user/${userid}`, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    }).then(res => res.json())
        .then(result => {
            console.log(result)

            setProfile(result)
        })
  })
  const followUser = () => {
    fetch("/follow", {
        method: "put",
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
            followId: userid
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "UPDATE", payload: { following: data.following, follower: data.follower } })
            localStorage.setItem("user", JSON.stringify(data))
            setProfile((prevState) => {
                return {
                    ...prevState,
                    user: {
                        ...prevState.user,
                        follower: [...prevState.user.follower, data._id]
                    }
                }
            })
            setShowFollow(false)
        })
}

const unfollowUser = () => {
    fetch("/unfollow", {
        method: "put",
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
            unfollowId: userid
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "UPDATE", payload: { following: data.following, follower: data.follower } })
            localStorage.setItem("user", JSON.stringify(data))
            setProfile((prevState) => {
                const newFollower=prevState.user.follower.filter(item=>item !== data._id)
                return {
                    ...prevState,
                    user: {
                        ...prevState.user,
                        follower: newFollower
                    }
                }
            })
            setShowFollow(true)
        })
}

  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://nerdist.com/wp-content/uploads/2019/05/Game-of-thrones-1.jpg')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={userProfile?userProfile.user.pic: "loading"}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    {showfollow?
                      <button
                        className="bg-red-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => followUser()}
                      >
                        Connect
                      </button>
                            :
                            <button
                        className="bg-red-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => unfollowUser()}
                      >
                        Dis connect
                      </button>
                            }
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {userProfile?userProfile.user.follower.length: 0} 
                        </span>
                        <span className="text-sm text-gray-500">Followers</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {userProfile?userProfile.posts.length: 0} 
                        </span>
                        <span className="text-sm text-gray-500"> Posts</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {userProfile?userProfile.user.following.length: 0} 
                        </span>
                        <span className="text-sm text-gray-500">Followings</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    {userProfile?userProfile.user.name: "loading"}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                     {userProfile?userProfile.user.country: "loading"}
                  </div>
                  <div className="mb-2 text-gray-700 mt-4">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  {userProfile? userProfile.user.organization:"loading"}
                     
                  </div>
                  
                  <div className="mb-2 text-gray-700">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                   
                    {userProfile? userProfile.user.role: "loading"}
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      </p>
                      <p>
                        {userProfile? userProfile.user.intro : "loading"}
                      </p>
                    </div>
                </div>
                      
                    <section class="text-gray-600 body-font overflow-hidden mt-10 py-10 border-t border-gray-300 text-center">
                    <h1 className=" mr-2 text-2xl py-2 text-black"><strong>POSTS</strong></h1>
                      <div class="container px-5 py-14 mx-auto">
                      {
                          userProfile ?
                          userProfile.posts.map(item=>{
                            return (

                              <>
                            
                        <div class="-my-8 divide-y-2 divide-gray-100">
                          <div class="py-2 flex flex-wrap md:flex-nowrap shadow-2xl px-4 ">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col" key={item._id}>
                              <span class="font-semibold title-font text-gray-700">{item.subject}</span>
                              <span class="mt-1 text-gray-500 text-sm">{item.postDate}</span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{item.title}</h2>
                              <p class="leading-relaxed">{parse(item.body)}</p>
                              <Link className="text-indigo-500 inline-flex items-center mt-4" to={"/post/" + item._id}>Read More 
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                          

                     
                        </div>
                        <br/>
                        </>
                              )
                            })
                            :
                            "loading"
                          }

                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
