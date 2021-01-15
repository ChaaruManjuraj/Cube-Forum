import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function MyAccount() {

    const [state, setState] = useState(false)
    const [count, setCount] = useState([])

    useEffect(() => {
        const rootLink = document.getElementById('root-link')
        rootLink.style.display = 'none'

        const anonMyAccountLink = document.getElementById('anonMyAccount-link')
        anonMyAccountLink.style.display = 'none'

        const regBtn = document.getElementById('hideBtn-reg')
        regBtn.style.display = 'none'

        const loginBtn = document.getElementById('hideBtn-login')
        loginBtn.style.display = "none"

        let formData = new FormData()

        formData.append('uid', sessionStorage.getItem('uid'))

        const url = 'http://localhost/cube-forum/backend/noPosts.php'

        axios.post(url, formData)
        .then(res => {
            var countValue = res.data['COUNT(ptitle)'] 
            setCount(countValue)
            setState(true)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="card card-welcome">
                `<h5> Hello, {sessionStorage.getItem('fName')} {sessionStorage.getItem('lName')}</h5>`
            </div>
            <div className="card">
            <ul className="list-group list-group-flush">
                <li className="list-group-item" id="firstName">First Name: {sessionStorage.getItem('fName')}</li>
                <li className="list-group-item" id="lName">Last Name: {sessionStorage.getItem('lName')}</li>
                <li className="list-group-item" id="email">Email: {sessionStorage.getItem('email')}</li>
                <li className="list-group-item" id="DOB">Date of Birth: {sessionStorage.getItem('DOB')}</li>
                <li className="list-group-item" id="phno">Phone Number: {sessionStorage.getItem('phno')}</li>
                {
                    state ?
                    <li className="list-group-item" id="no-posts">No of Posts: {count}</li> :
                    null
                }
            </ul>
            </div>
        </div>
    )
}
 