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
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fas fa-home fa-2x" title="Home"></i> <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-search fa-2x" title="Search"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-comment-alt fa-2x" title="Posts"></i></a>
                        </li>
                        <Link to='/login'>
                            <button type="button" onClick={this.handleLogin} className="btn btn-light btn-login">Login</button>
                        </Link>
                        <Link to='/register'>
                            <button type="button" onClick={this.handleReg} className="btn btn-light btn-reg">Register</button>
                        </Link>
                    </ul>
                    
                </div>
            </nav>

        )
    }
}
