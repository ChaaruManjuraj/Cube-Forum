import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


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
            phno: "",
            isRegisteredSucceeded: false,
        }

        this.handleReg = this.handleReg.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        const regBtn = document.getElementById('hideBtn-reg')
        regBtn.style.display = 'none'

        const loginBtn = document.getElementById('hideBtn-login')
        loginBtn.style.display = "block"

        const homeLink = document.getElementById('home-link')
        homeLink.style.display = "none"

        const myAccountLink = document.getElementById('myAccount-link')
        myAccountLink.style.display = "none"

        const myContentLink = document.getElementById('myContent-link')
        myContentLink.style.display = "none"

        const logoutBtn = document.getElementById('btn-logout')
        logoutBtn.style.display = "none"
    }

    handleReg(e) {
        const {name, value} = e.target
        
        this.setState({
            [name]: value
        })
    }

    handleClick(e) {
        e.preventDefault()

        const showError = (str) => {
            const alertMes = document.getElementById('alert-reg')
            alertMes.style.display = "block"
            alertMes.innerHTML = str
            setTimeout(() => alertMes.style.display = "none", 4000)
        }
        
        const validateData = () => {
            // Optional function for more intense validation of form data
            if(this.state.fName === '' || this.state.lName === '' || this.state.DOB === '' || this.state.pass1 === '' || this.state.pass2 === '' || this.state.phno === '' || this.state.email === '')
                showError("Please fill in all fields")
            else if(this.state.pass1 !== this.state.pass2)
                showError("Passwords don't match")
            else if(this.state.pass1.length < 8)
                showError("Please enter the password which is atlest 8 characters long")
            else 
                return true
        }

        if(validateData() === true) {

            let formData = new FormData()
        
            const url = "http://localhost:80/cube-forum/backend/register.php"

            formData.append('fName',this.state.fName)
            formData.append('lName',this.state.lName)
            formData.append('DOB', this.state.DOB)
            formData.append('email', this.state.email)
            formData.append('password', this.state.pass1)
            formData.append('phno', this.state.phno)

            axios.post(url, formData)
            .then(res => {
                if(res.data.toString() === "data_insertion_successful") {
                    this.setState({ isRegisteredSucceeded: true })
                }
            })
            .catch(err => console.log(err))

        }
       
    }

    render() {
        return (
            <div className="container card reg-container login-container">

                <h2 id="head-reg">Register now for free</h2>

                <div className="alert alert-danger" id="alert-reg" role="alert"></div>

                <form id="reg">
                    <p>
                        <input type="text" className="form-control" placeholder="First Name" id="fname" 
                        name="fName" onChange={this.handleReg} value={this.state.fName} required/>
                    </p>
                    <p>
                        <input type="text" className="form-control" placeholder="Last Name" id="lname" 
                        name="lName" onChange={this.handleReg} value={this.state.lName} required/>
                    </p>
                    <p>
                        <input type="date" className="form-control" placeholder="Date of Birth" id="dob" 
                        name="DOB" onChange={this.handleReg} value={this.state.DOB} required/>
                    </p>
                    <p>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email ID" 
                        onChange={this.handleReg} value={this.state.email} required/>
                    </p>
                    <p>
                        <input type="password" className="form-control" id="password1" placeholder="Password" name="pass1"
                        onChange={this.handleReg} value={this.state.pass1} required/>
                    </p>
                    <p>
                        <input type="password" className="form-control" id="password2" placeholder="Confirm Password" name="pass2"
                        onChange={this.handleReg} value={this.state.pass2} required/>
                    </p>
                    <p>
                        <input type="text" className="form-control" placeholder="Phone Number" id="phno" 
                        name="phno" onChange={this.handleReg} value={this.state.phno} required/>
                    </p>
                    <p> <button type="submit" className="btn btn-submit btn-login btn-reg" id="btn-reg" onClick={this.handleClick}>Register Now!</button> </p>
                </form>

                {
                    this.state.isRegisteredSucceeded ?
                    <Redirect to={{pathname: '/login', state: true}} /> :
                    null
                }
            </div>
        )
    }

}

