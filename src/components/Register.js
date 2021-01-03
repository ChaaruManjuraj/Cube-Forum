import React, { Component } from 'react'

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fName: "",
            lName: "",
            DOB: "",
            email: "",
            pass1: "",
            pass2: "",
            phno: ""
        }

        this.handleReg = this.handleReg.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleReg(e) {
        const {name, value} = e.target
        
        this.setState({
            [name]: value
        })
    }

    handleClick(e) {
        e.preventDefault()
        console.log('clicked')
    }

    render() {
        return (
            <div className="container card reg-container login-container">

                <h2 id="head-reg">Register now for free</h2>

                <form id="reg">
                    <p>
                        <input type="text" className="form-control" placeholder="First Name" id="fname" 
                        name="fName" onChange={this.handleReg} value={this.state.fName} />
                    </p>
                    <p>
                        <input type="text" className="form-control" placeholder="Last Name" id="lname" 
                        name="lName" onChange={this.handleReg} value={this.state.lName} />
                    </p>
                    <p>
                        <input type="date" className="form-control" placeholder="Date of Birth" id="dob" 
                        name="DOB" onChange={this.handleReg} value={this.state.DOB} />
                    </p>
                    <p>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email ID" 
                        onChange={this.handleReg} value={this.state.email} />
                    </p>
                    <p>
                        <input type="password" className="form-control" id="password1" placeholder="Password" name="pass1"
                        onChange={this.handleReg} value={this.state.pass1} />
                    </p>
                    <p>
                        <input type="password" className="form-control" id="password2" placeholder="Confirm Password" name="pass2"
                        onChange={this.handleReg} value={this.state.pass2} />
                    </p>
                    <p>
                        <input type="text" className="form-control" placeholder="Phone Number" id="phno" 
                        name="phno" onChange={this.handleReg} value={this.state.phno} />
                    </p>
                    <p> <button className="btn btn-submit btn-login btn-reg" onClick={this.handleClick}>Register Now!</button> </p>
                </form>
            </div>
        )
    }
}

