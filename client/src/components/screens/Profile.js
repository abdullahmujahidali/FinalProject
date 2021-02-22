import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../../App"
// import {Link} from "react-router-dom"
import parse from "html-react-parser"
const Profile = () => {
  const [mypics, setpics] = useState([])
  const { state, dispatch } = useContext(UserContext)


  useEffect(() => {
    fetch("/mypost", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        setpics(result.mypost)
      })
  }, [])
  return (
    <>
      <section className="container">


        <div className="profile-grid my-1">

          <div className="profile-top bg-dark p-2">
            <img
              className="round-img my-1"
              src={state?state.pic:"loading"}
              alt=""
            />
            <h1 className="large">{state ? state.name : "loading"}</h1>
            <h5 className="large">{state ? state.email : "loading"}</h5>
            {/* <p className="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p> */}
            <div className="icons my-1" style={{ display: "flex", justifyContent: "space-betweens" }}>
              <h6 style={{ marginRight: "16px" }}>{state ? mypics.length: 0} posts </h6>
              <h6 style={{ marginRight: "16px" }}>{state ? state.follower.length : 0} followers </h6>
              <h6>{state ? state.following.length: 0} followings</h6>

            </div>
          </div>

          <div className="profile-about bg-light p-2">
            <h2 className="text-primary">{state ? state.name: "loading"}'s Bio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
              neque modi perspiciatis similique?
          </p>
            <div className="line"></div>

            <div className="profile-exp bg-dark p-2" >
              <h2 className="text-primary" >POSTS</h2>
              <div style={{ backgroundColor: "#E0F2F1" }}>
                {
                  mypics.map(item => {
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

    </>
  )
}

export default Profile