import React, { useState, useEffect } from "react"
import parse from "html-react-parser"
const Footer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("/allpost", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setData(result.posts)
            })
    }, [])
    return (
        <>
            <section className="container">
                <h1 className="large text-primary">
                    Posts
      </h1>
                <p className="lead"><i className="fas fa-user"></i> Big Brains!</p>

                <div className="posts">
                    {
                        data.map(item => {
                            return (
                                <div className="post bg-white p-1 my-1" key={item._id}>
                                    <div>
                                        <a href="profile.html">
                                            <img
                                                className="round-img"
                                                src={item.photo}
                                                alt=""
                                            />
                                            <h4>{item.postedBy.name}</h4>
                                        </a>
                                    </div>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <p className="my-1">
                                        <img src={item.photo} alt=""></img>
                                        {parse(item.body)}
            </p>
                                        <p className="post-date">
                                            {item.subject}
            </p>
                                        <button type="button" className="btn btn-light">
                                            <i className="fas fa-thumbs-up"></i>
                                            <span>4</span>
                                        </button>
                                        <button type="button" className="btn btn-light">
                                            <i className="fas fa-thumbs-down"></i>
                                        </button>
                                        <a href="post.html" className="btn btn-primary">
                                            Discussion <span className='comment-count'>3</span>
                                        </a>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
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