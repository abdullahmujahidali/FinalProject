import React, { useEffect, useState,useContext } from "react"
import {UserContext} from "../../App"
// import {Link} from "react-router-dom"
import parse from "html-react-parser"
const Profile = () => {
  const [mypics, setpics] = useState([])
  const {state,dispatch} = useContext(UserContext)


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
              src="https://avatars2.githubusercontent.com/u/48271080?s=460&u=0e1e494ab51f5a98750cbd571b113ada34daa8b2&v=4"
              alt=""
            />
            <h1 className="large">{state?state.name:"loading"}</h1>
            {/* <p className="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p> */}
            <div className="icons my-1" style={{ display: "flex", justifyContent: "space-betweens" }}>
              <h6 style={{ marginRight: "16px" }}>40 posts </h6>
              <h6 style={{ marginRight: "16px" }}>109K followers </h6>
              <h6>11 followings</h6>

            </div>
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
            <div  style={{backgroundColor: "#E0F2F1" }}>
              {
                mypics.map(item => {
                  return (
                    [
                      <br />,
                      <h3 key={item._id}  style={{color: "blue"}}>{item.title}</h3>,
                      <p key={item._id}><strong>Subject Domain: </strong>{item.subject}</p>,
                     // <img key={item._id} className="item" src={item.photo} alt="no-ph"/>,
                      <p key={item._id}> 
                        <strong>Description: </strong><center>{parse(item.body)}</center></p>

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