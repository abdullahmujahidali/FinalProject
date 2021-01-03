import React, { useState } from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser"
const CreatePost = () => {
    const [text, setText] = useState('')
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
                <blockquote class="blockquote">
                    <footer class="blockquote-footer" style={{
                        color: "white"
                    }}>
                        CREATE A POST
                <br />
                        <cite title="Source Title">Select the subject type from the list </cite></footer>
                </blockquote>

                <select class="form-control">
                    <option>Computer Science</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                </select>
                <div class="input-field col s12">
                    <input disabled value="Not in the list" id="disabled" type="text" class="validate" />

                </div>
                <input type="text" placeholder="Title" />
                <div className="App">
                    <div className="editor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }
                            }
                        />
                    </div>
                    <h2>Content</h2>
                    <p>{parse(text)}</p>
                </div>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>Upload Image</span>
                        <input type="file" />
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                    </div>
                </div>
                <div className="text-left mb-3">
                    <button type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1">Submit Post</button>
                </div>
            </div>
        </>
    )
}

export default CreatePost