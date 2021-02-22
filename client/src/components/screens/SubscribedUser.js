import React, { useState, useEffect,useContext } from "react"
import { UserContext } from "../../App"
import parse from "html-react-parser"
import {Link} from "react-router-dom"
const Footer = () => {
    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        fetch("/getsubpost", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result)
                setData(result.posts)
            })
    }, [])
    const delelePost=(postid)=>{
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            const newData = data.filter(item=>{
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
                // console.log(result)
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
            <section className="container" style={{backgroundColor: "#E0F2F1"}}>
                <h1 className="large text-primary">
                    Posts
      </h1>
                <p className="lead"><i className="fas fa-user" ></i> Big Brains!</p>

                <div className="posts"  style={{backgroundColor: "#E0F2F1"}}>
                    {
                        data.map(item => {
                            return (
                                <div className="post bg-white p-1 my-1" key={item._id}  >
                                    <div >
                                        <a href="/profile">
                                            <img
                                                className="round-img"
                                                src={item.photo}
                                                alt=""
                                            />
                                            <h4><Link to={item.postedBy._id !== state._id ?`/profile/`+item.postedBy._id : `/profile/` }>{item.postedBy.name}</Link></h4>
                                        </a>
                                    </div>
                                    <div style={{backgroundColor: "#78909C"}} >
                                        <h2>{item.title}</h2>
                                        <p className="my-1">
                                            <img src={item.photo} alt=""></img>
                                            {parse(item.body)}
                                        </p>
                                        <p className="post-date">
                                            {item.subject}
                                        </p>
                                        {item.likes.includes(state._id)
                                            ?
                                            <button type="button" className="btn btn-light">
                                                <i className="fas fa-thumbs-down" onClick={() => { unlikePost(item._id) }}></i>
                                            </button>
                                            :
                                            <button type="button" className="btn btn-light">
                                                <i className="fas fa-thumbs-up" onClick={() => { likePost(item._id) }}></i>
                                                <span>{item.likes.length}</span>
                                            </button>
                                        }


                                        <a href="/Post" className="btn btn-primary">
                                            Discussion <span className='comment-count'>3</span>
                                        </a>
                                        {item.postedBy._id === state._id && 
                                            <button onClick={()=>delelePost(item._id)}
                                            type="button"
                                            className="btn btn-danger"
                                        >  <i className="fas fa-times"> </i></button> }
                                   </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Footer;