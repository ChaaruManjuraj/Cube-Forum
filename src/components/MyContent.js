import React, { Component } from 'react'
import axios from 'axios'

import DisplayPosts from './DisplayPosts'

export default class MyContent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            postsJSON: [],
            status: false,
        }
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

        const regBtn = document.getElementById('hideBtn-reg')
        regBtn.style.display = 'none'

        const loginBtn = document.getElementById('hideBtn-login')
        loginBtn.style.display = "none"

        const userid = sessionStorage.getItem('uid')
        
        let formData = new FormData()
        const url = 'http://localhost/cube-forum/backend/myContent.php'

        formData.append('uid', userid)

        axios.post(url, formData)
        .then(res => {
            if(res.data.toString === 'no_posts_found') {
                this.setState({status: false})
            }
            else {
                this.setState({
                    postsJSON: res.data
                })
                this.setState({status: true})
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2 style={{marginTop: '1rem'}}>My Content</h2>
                {
                    this.state.status === false ?
                    <h1>No posts found on this id</h1> :
                    null
                }
                {
                    this.state.status ?
                    <DisplayPosts object={this.state.postsJSON}/> :
                    <h1>Loading...</h1>
                }
                
            </div>
        )
    }
}
