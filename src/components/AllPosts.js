import axios from 'axios'
import React, { Component } from 'react'

import DisplayPosts from './DisplayPosts'

export default class AllPosts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataReceived: false,
            data: []
        }

        const url = 'http://localhost/cube-forum/backend/recentPosts.php'

        axios.get(url)
        .then(res => {
            if(res.data.toString() === 'no_posts_found')
                this.setState({dataReceived: false})
            else {
                this.setState({
                    data: res.data,
                    dataReceived: true
                })
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1 style={{marginTop: "2rem"}}>Recent Posts</h1>
                {
                    this.state.dataReceived ?
                    <DisplayPosts object={this.state.data} /> :
                    <h2>Loading...</h2>
                }
            </div>
        )
    }
}
