import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleLogin: false,
            toggleReg: false
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        if(sessionStorage.getItem('isAuth')) {
            console.log('Logged in')
        }
    }

    handleLogout() {
        sessionStorage.clear()
    }


    handleLogin() {
        this.setState ({ toggleLogin: true })
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Cube Forum</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to='/'>
                            <li className="nav-item active" id="root-link">
                                <a className="nav-link"><i className="fas fa-home fa-2x" title="Home"></i> <span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to='/home'>
                            <li className="nav-item active" id="home-link">
                                <a className="nav-link"><i className="fas fa-home fa-2x" title="Home"></i> <span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to='/myContent'>
                            <li className="nav-item" id="myContent-link">
                                <a className="nav-link"><i className="fas fa-search fa-2x" title="Search"></i></a>
                            </li>
                        </Link>
                        <Link to="/anonMyAccount">
                            <li className="nav-item" id="anonMyAccount-link">
                                <a className="nav-link"><i className="fas fa-user fa-2x" title="Account Details"></i></a>
                            </li>
                        </Link>
                        <Link to='/myAccount'>
                            <li className="nav-item" id="myAccount-link">
                                <a className="nav-link"><i className="fas fa-user fa-2x" title="Account"></i></a>
                            </li>
                        </Link>
                        <Link to='/login'>
                            <button type="button" onClick={this.handleLogin} className="btn btn-light btn-login" id="hideBtn-login">Login</button>
                        </Link>
                        <Link to='/register'>
                            <button type="button" onClick={this.handleReg} className="btn btn-light btn-reg" id="hideBtn-reg">Register</button>
                        </Link>
                        <Link to='/'>
                            <button type="button" className="btn btn-light btn-reg" id="btn-logout" onClick={this.handleLogout}>Logout</button>
                        </Link>
                    </ul>
                    
                </div>
            </nav>

        )
    }
}
