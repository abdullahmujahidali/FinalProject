import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../../App"
import { useParams } from "react-router-dom"
// import {Link} from "react-router-dom"
import parse from "html-react-parser"
import { data } from "jquery"
const Profile = () => {
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
    }, [])
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
            {userProfile ?

                <section className="container">


                    <div className="profile-grid my-1">

                        <div className="profile-top bg-dark p-2">
                            <img
                                className="round-img my-1"
                                src={userProfile.user.pic}
                                alt=""
                            />
                            <h1 className="large">{userProfile.user.name}</h1>
                            <h5 className="large">{userProfile.user.email}</h5>
                            {/* <p className="lead">Developer at Microsoft</p>
  <p>Seattle, WA</p> */}
                            <div className="icons my-1" style={{ display: "flex", justifyContent: "space-betweens" }}>
                                <h6 style={{ marginRight: "16px" }}>{userProfile.posts.length} posts </h6>
                                <h6 style={{ marginRight: "16px" }}>{userProfile.user.follower.length} followers </h6>
                                <h6>{userProfile.user.following.length} followings</h6>

                            </div>
                            <h6>
                            {showfollow?
                                <button style={{ margin: "10px" }} className="btn waves-effect waves-light #b71c1c red darken-4"
                                    onClick={() => followUser()}>Follow User </button>
                            :
                            <button style={{ margin: "10px" }} className="btn waves-effect waves-light #b71c1c red darken-4"
                                    onClick={() => unfollowUser()}>UnFollow User </button>
                            }
                                

                              
                            </h6>
                        </div>

                        <div className="profile-about bg-light p-2">
                            <h2 className="text-primary">Abdullahs's Bio</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                                doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
                                neque modi perspiciatis similique?
  </p>
                            <div className="line"></div>
                            <h2 className="text-primary">Skill Set</h2>

                            <div className="profile-exp bg-dark p-2" >
                                <h2 className="text-primary" >POSTS</h2>
                                <div style={{ backgroundColor: "#fff" }}>
                                    {
                                        userProfile.posts.map(item => {
                                            return (
                                                [
                                                    <div style={{ backgroundColor: "#78909C" }}>
                                                        <h3 key={item._id} style={{ color: "blue" }}>{item.title}</h3>
                                                        <p key={item._id}><strong>Subject Domain: </strong>{item.subject}</p>
                                                        {/* // <img key={item._id} className="item" src={item.photo} alt="no-ph"/>, */}
                                                        <p key={item._id}>
                                                            <strong>Description: </strong><center>{parse(item.body)}</center></p>
                                                    </div>
                                                ]
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : <h2>Loading</h2>}
        </>
    )
}

export default Profile