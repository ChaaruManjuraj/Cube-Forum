import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            pass: "",
            isJustRegistered: this.props.location.state,
            isAuth: false
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {

        const regBtn = document.getElementById('hideBtn-reg')
        regBtn.style.display = 'block'

        const loginBtn = document.getElementById('hideBtn-login')
        loginBtn.style.display = "none"

        const logoutBtn = document.getElementById('btn-logout')
        logoutBtn.style.display = "none"

        const homeLink = document.getElementById('home-link')
        homeLink.style.display = "none"

        const myAccountLink = document.getElementById('myAccount-link')
        myAccountLink.style.display = "none"

        const myContentLink = document.getElementById('myContent-link')
        myContentLink.style.display = "none"

        if(this.state.isJustRegistered) {
            const alertMes = document.getElementById('alert-justRegistered')
            alertMes.style.display = "block"
            alertMes.innerHTML = "Successfully registered"
            setTimeout(() => alertMes.style.display = "none", 4000)
        }
    }

    handleLogin(e) {
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
            if(this.state.email === '' || this.state.pass === '') {
                showError("Please fill in all fields")
            }
            else
                return true
        }

        if(validateData() === true) {
            let formData = new FormData()

            const url = "http://localhost:80/cube-forum/backend/login.php"
    
            formData.append('email', this.state.email)
            formData.append('password', this.state.pass)
    
            axios.post(url, formData)
            .then(res => {
                if(res.data.toString() === 'pass_didnt_match') {
                    showError("Incorrect password")
                    this.setState({isAuth: false})
                }
                else if(res.data.toString() === 'email_didnt_match') {
                    showError("Incorrect email")
                    this.setState({isAuth: false})
                }
                else {
                    sessionStorage.setItem('uid', res.data.uid)
                    sessionStorage.setItem('fName', res.data.fName)
                    sessionStorage.setItem('lName', res.data.lName)
                    sessionStorage.setItem('email', res.data.email)
                    sessionStorage.setItem('DOB', res.data.DOB)
                    sessionStorage.setItem('phno', res.data.phno)

                    let authData = new FormData()

                    const url = "http://localhost/cube-forum/backend/authToken.php"

                    authData.append('uid', sessionStorage.getItem('uid'))
                    authData.append('email', sessionStorage.getItem('email'))

                    axios.post(url, authData)
                    .then(res => sessionStorage.setItem('authToken', res.data))
                    .catch(err => console.log(err))

                    this.setState({isAuth: true})
                    sessionStorage.setItem('isAuth', true)
                }
            })
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
        <div className="card container login-container ">

            <h2 id="head-login">Login to your account</h2>

            <div className="alert alert-danger" id="alert-reg" role="alert"></div>
            <div className="alert alert-success" id="alert-justRegistered" role="alert"></div>

            <form id="login">

                <p> 
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> 
                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" 
                    onChange={this.handleLogin} value={this.state.email}
                    />
                </p>
                <p>
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name="pass"
                    onChange={this.handleLogin} value={this.state.pass}
                    />
                </p>
                <p> <button className="btn btn-submit btn-login" id="btn-login" onClick={this.handleClick}>Login!</button> </p>
            </form>

            {
                this.state.isAuth ?
                <Redirect to= {{pathname: "/home", state: true}} /> :
                null
            }
        </div>
        )
    }
}

