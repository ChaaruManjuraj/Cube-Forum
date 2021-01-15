import React, { Component } from 'react'
import axios from 'axios'

import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'

import AllPosts from './AllPosts'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,

            editorState: EditorState.createEmpty(),
            postTitle: "",
            postTag: "",

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit(e) {

        const handleInsert = (status) => {
            if(status === 'success') {
                const alertMes = document.querySelector('#alert-postInserted')
                alertMes.innerHTML = "Post inserted successfully"
                alertMes.style.display = 'block'
                setTimeout(() => alertMes.style.display = "none", 4000)
            }
            else if(status === 'failed') {
                const alertMes = document.querySelector('#alert-postNotInserted')
                alertMes.innerHTML = "Sorry, post couldn't be inserted"
                alertMes.style.display = 'block'
                setTimeout(() => alertMes.style.display = "none", 4000)
            }   
        }

        e.preventDefault()

        this.setState({toggleSubmit: true})

        let postData = new FormData();

        const url = "http://localhost/cube-forum/backend/postQuery.php"

        postData.append('uid', sessionStorage.getItem('uid'))
        postData.append('postTitle', this.state.postTitle)
        postData.append('postTag', this.state.postTag)
        postData.append('postContent', draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))

        axios.post(url, postData)
        .then(res => {
            if(res.data.toString() === 'data_insertion_successful')
                handleInsert('success')
            else
                handleInsert('failed')
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {

        const homeLink = document.getElementById('home-link')
        homeLink.style.display = "block"

        const rootLink = document.getElementById('root-link')
        rootLink.style.display = "none"

        const anonMyAccountLink = document.getElementById('anonMyAccount-link')
        anonMyAccountLink.style.display = "none"

        const myAccountLink = document.getElementById('myAccount-link')
        myAccountLink.style.display = "block"

        const myContentLink = document.getElementById('myContent-link')
        myContentLink.style.display = "block"

        let tokenData = new FormData()

        const url = 'http://localhost/cube-forum/backend/authCheck.php'
        
        tokenData.append('token', localStorage.getItem('authToken'))

        axios.post(url, tokenData)
        .then(res => {
            if(res.data.toString() === 'auth_token_verified') {
                this.setState({ isLoggedIn: true })
            }
            else if (res.data.toString() === 'auth_token_not_verified') {
                this.setState({ isLoggedIn: false })
            }
            else
                this.setState({ isLoggedIn: false }) 
        })
        .catch(err => console.log(err))

    }

    componentDidUpdate(prevState) {
        if(this.state.isLoggedIn !== prevState.isLoggedIn) {
            console.log(this.state.isLoggedIn)
        }

        if(this.state.isLoggedIn === true) {
            let regBtn = document.getElementById('hideBtn-reg')
            regBtn.style.display = 'none'
    
            let loginBtn = document.getElementById('hideBtn-login')
            loginBtn.style.display = 'none'
    
            const logoutBtn = document.getElementById('btn-logout')
            logoutBtn.style.display = 'block'
        }

    }

    render() {

        const {editorState} = this.state

        return (
            <div>
                <div className="container greeting-container">
                    <h5 className="greeting-text">Hi, {sessionStorage.getItem('fName')}</h5>
                </div>

                <div className="ask-question-container container">
                    <p>
                        <a className="btn btn-primary btn-light btn-toggler" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Post a thread
                        </a>
                    </p>

                    <div className="alert alert-success" id="alert-postInserted" role="alert"></div>
                    <div className="alert alert-danger" id="alert-postNotInserted" role="alert"></div>

                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            
                            <div className="post-title">
                               <p> <input type="text" className="form-control post-title" placeholder="Post Title" name="postTitle" id="post-title" onChange={this.handleChange} value={this.state.postTitle} required /> </p> 
                            </div>

                            <div className="rich-text">

                                <Editor 
                                    editorState={editorState}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={this.onEditorStateChange}
                                />
                            </div>

                            {/* <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-btn" data-toggle="dropdown">Tag</button>
                                <span className="caret"></span>
                                <ul className="dropdown-menu" aria-labelled-by="dropdown-btn">
                                    <li><a href="#">C</a></li>
                                    <li><a href="#">C++</a></li>
                                    <li><a href="#">C#</a></li>
                                </ul>
                            </div> */}

                            <div className="tag dropdown">
                                <label>Tags:&nbsp;</label>
                                <select value={this.state.tag} onChange={this.handleChange} name="postTag">
                                <option value="null">--Tags--</option>
                                    <option value="C">C</option>
                                    <option value="C++">C++</option>
                                    <option value="C#">C#</option>
                                    <option value="Java">Java</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="R">R</option>
                                    <option value="Python">Python</option>
                                    <option value="CSS">CSS</option>
                                    <option value="Gitbash">Git</option>
                                    <option value="HTML">HTML</option>
                                    <option value="PHP">PHP</option>
                                    <option value="JSON">JSON</option>
                                    <option value="ReactJS">ReactJS</option>
                                    <option value="Angular">Angular</option>
                                    <option value="Objective-C">Objective-C</option>
                                    <option value="Swift">Swift</option>
                                    <option value="XML">XML</option>
                                    <option value="Kotlin">Kotlin</option>
                                    <option value="SQL">SQL</option>
                                </select>
                            </div>

                            <div className="post-btn-container">
                                <button className="btn-primary btn-light btn post-btn" type="button" onClick={this.handleSubmit}>Post Question</button>
                            </div>
                        </div>
                    </div>
                </div>

                <AllPosts />
            </div>
        )
    }
}
