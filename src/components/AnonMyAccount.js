import React from 'react'
import { useEffect } from 'react'

export default function AnonMyAccount() {
    
    useEffect(() => {
        const logoutBtn = document.getElementById('btn-logout')
        logoutBtn.style.display = "none"

        const homeLink = document.getElementById('home-link')
        homeLink.style.display = "none"

        const myAccountLink = document.getElementById('myAccount-link')
        myAccountLink.style.display = "none"

        const myContentLink = document.getElementById('myContent-link')
        myContentLink.style.display = "none"

    })

    return (

        <div>
            <div className="card welcome-card">
                <h4>Hi, there</h4>
                <h5>Please login/register to see your account details</h5>
            </div>
        </div>
    )
}
