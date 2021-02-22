import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../../App"
// import {Link} from "react-router-dom"
import parse from "html-react-parser"
const Profile = () => {
  const [mypics, setPics] = useState([])
  const { state, dispatch } = useContext(UserContext)
  const [image, setImage] = useState("")


  useEffect(() => {
    fetch("/mypost", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        setPics(result.mypost)
      })
  }, [])
  useEffect(() => {
    if (image) {
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
          fetch('/updatepic', {
            method: "put",
            headers: {
              "Content-type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
              pic: data.url
            })
          }).then(res => res.json())
            .then(result => {
              console.log(result)
              localStorage.setItem("user", JSON.stringify({ ...state, pic: result.pic }))
              dispatch({ type: "UPDATEPIC", payload: result.pic })

            })

        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [image,state,dispatch])
  const updatePhoto = (file) => {
    setImage(file)
  }
  return (
    <>
      <section className="container">


        <div className="profile-grid my-1">

          <div className="profile-top bg-dark p-2">
            <img
              className="round-img my-1"
              src={state ? state.pic : "loading"}
              alt=""
            />

            <h1 className="large">{state ? state.name : "loading"}</h1>
            <h5 className="large">{state ? state.email : "loading"}</h5>
            {/* <p className="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p> */}
            <div className="icons my-1" style={{ display: "flex", justifyContent: "space-betweens" }}>
              <h6 style={{ marginRight: "16px" }}>{state ? mypics.length : 0} posts </h6>
              <h6 style={{ marginRight: "16px" }}>{state ? state.follower.length : 0} followers </h6>
              <h6>{state ? state.following.length : 0} followings</h6>


            </div>
            <div style={{ marginLeft: "0px", margin: "10px" }} className="file-field input-field" >
              <div className="btn waves-effect waves-light #b71c1c white darken-1">
                <span>Update-Pic</span>
                <input type="file" onChange={(e) => updatePhoto(e.target.files[0])} />
              </div>
              <div style={{ margin: "010px 0 0px 100px" }} className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
            <button style={{ margin: "10px" }} className="btn waves-effect waves-light #b71c1c white darken-1"
              onClick={()=>{updatePhoto()}}><strong>Update Profile Picture</strong> </button>
          </div>

          <div className="profile-about bg-light p-2">
            <h2 className="text-primary">{state ? state.name : "loading"}'s Bio</h2>
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