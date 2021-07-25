import React from "react"
const date = new Date().getFullYear();

function Footer(){
    return <footer>
        <p>{date} Fan</p>
    </footer>
}

export default Footer;