import React from 'react'
import Typed from 'react-typed';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 className="heading">Web development and Android dev</h1>
                <Typed 
                className="typed-text"
                strings={["web development", "Android Development", "Front-end-Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact me</a>

            </div>
            
        </div>
    )
}

export default Header
