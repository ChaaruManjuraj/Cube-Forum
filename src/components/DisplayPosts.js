import React, { Component } from 'react'

export default class DisplayPosts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: this.props.object
        }
    }

    componentWillUnmount() {
        this.setState({
            posts: []
        })
    }

    render() {
        return (
            <div>

                <div>
                    {
                        this.state.posts.map((post, index) => {
                            return (
                                <div id="post-container" className="card card-post">
                                    <h4 id="post-title">{post.ptitle}</h4>
                                    <p id="created-by">Created by: {post.fName} {post.lName}</p>
                                    <div className="card post-content">
                                        <p dangerouslySetInnerHTML={{__html: post.pcontent}} />
                                    </div>
                                    <p id="tag">Tag: {post.ptag}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
