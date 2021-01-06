import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser"
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import M from "materialize-css"


const CreatePost = () => {

    const history = useHistory()

    const [title, setTitle] = useState("")
    const [subject, setSub] = useState("Computer Science")
    const [value, setValue] = useState('');
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const handleSelect = (e) => {
        console.log(e);
        setValue(e)
    }
    useEffect(() => {
        if (url) {
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    
                    subject:value,
                    title,
                    body,
                    photo: url
                })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log("Value is",subject)
                    // console.log("title is",title)
                    // console.log("body is",body)
                    // console.log("pic is",url)
                    if (data.error) {
                        M.toast({ html: data.error, classes: "#004d40 teal darken-4" })
                    }
                    else {
                        M.toast({ html: "Post created", classes: "#03a9f4 light-blue" })
                        history.push("/PostHome")
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }, [url, body, title, subject, history,value])

    const postDetails = () => {

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
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <>

            <div className="card input-filed"
                style={{
                    paddingTop: "-30px",
                    margin: "10px auto",
                    maxWidth: "600px",
                    padding: "20px",
                    textAlign: "center"
                }}
            >
                <blockquote className="blockquote">
                    <footer className="blockquote-footer" style={{
                        color: "white"
                    }}>
                        CREATE A POST
                <br />
                        <cite title="Source Title">Select the subject type from the list </cite></footer>
                </blockquote>

                <DropdownButton
                    alignRight
                    title="Select Subject"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="Chemistry">Chemistry</Dropdown.Item>
                    <Dropdown.Item eventKey="Biology">Biology</Dropdown.Item>
                    <Dropdown.Item eventKey="Computer Science">Computer Science</Dropdown.Item>
                    <Dropdown.Divider />
                </DropdownButton>
                <h4>You selected {value}</h4>

                {/* <select className="form-control"  onSelect={handleSelect}>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                </select> */}
                <div className="input-field col s12">
                    <input disabled value="Not in the list" id="disabled" type="text" className="validate" />

                </div>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
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
                    <h2>Content</h2>
                    <p>{parse(body)}</p>
                </div>
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Upload Image</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <div className="text-left mb-3">
                    <button type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1"
                        onClick={() => postDetails()}
                    >Submit Post</button>
                </div>
            </div>
        </>
    )
}

export default CreatePost