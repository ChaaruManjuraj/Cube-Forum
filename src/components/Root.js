import React from 'react'
import { useState, useEffect } from 'react'

import AllPosts from './AllPosts'

export default function Root() {

    useEffect(() => {
        const regBtn = document.getElementById('hideBtn-reg')
        regBtn.style.display = 'block'

        const loginBtn = document.getElementById('hideBtn-login')
        loginBtn.style.display = "block"

        const logoutBtn = document.getElementById('btn-logout')
        logoutBtn.style.display = "none"

        const homeLink = document.getElementById('home-link')
        homeLink.style.display = "none"

        const rootLink = document.getElementById('root-link')
        rootLink.style.display = "block"

        const myAccountLink = document.getElementById('myAccount-link')
        myAccountLink.style.display = "none"

        const anonMyAccountLink = document.getElementById('anonMyAccount-link')
        anonMyAccountLink.style.display = "block"

        const myContentLink = document.getElementById('myContent-link')
        myContentLink.style.display = "none"
    })

    return (
        <div>
            <AllPosts />
        </div>
    )
}
