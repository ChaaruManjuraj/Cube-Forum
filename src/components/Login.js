import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            pass: ""
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleLogin(e) {
        const {name, value} = e.target
        this.setState({ 
            [name]: value
        })
    }

    handleClick(e) {
        e.preventDefault()
        console.log("clicked")
    }

    render() {
        return (
        <div className="card container login-container ">

            <h2 id="head-reg">Login to your account</h2>

            <form id="login">

                <p> 
                    <label for="exampleFormControlInput1" class="form-label">Email address</label> 
                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" 
                    onChange={this.handleLogin} value={this.state.email}
                    />
                </p>
                <p>
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name="pass"
                    onChange={this.handleLogin} value={this.state.pass}
                    />
                </p>
                <p> <button className="btn btn-submit btn-login" onClick={this.handleClick}>Login!</button> </p>
            </form>
        </div>
        )
    }
}

