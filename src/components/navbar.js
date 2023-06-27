import React from "react";

function Navbar () {
 const homebutton = function () {
        console.log("home button clicked");
        window.location.href = "/";
 }
 const portfoliobutton = function () {
        console.log("portfolio button clicked");
        window.location.href = "/portfolio";
    }
const contactbutton = function () {
        console.log("contact button clicked");
        window.location.href = "/contact";
    }
const resumebutton = function () {
        console.log("resume button clicked");
        window.location.href = "/resume";
    }


    return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-between" style={{backgroundColor: "#7A508F"}}>
        <h1>W1zard's Portfolio</h1>
        <div className="links">
            <button className="btn btn-outline-dark mx-1" style={{backgroundColor: "#17e8e3"}} type="button" onClick={homebutton}>Home</button>
            <button className="btn btn-outline-dark mx-1" style={{backgroundColor: "#17e8e3"}} type="button" onClick={portfoliobutton}>Portfolio</button>
            <button className="btn btn-outline-dark mx-1" style={{backgroundColor: "#17e8e3"}} type="button" onClick={contactbutton}>Contact</button>
            <button className="btn btn-outline-dark mx-1" style={{backgroundColor: "#17e8e3"}} type="button" onClick={resumebutton}>Resume</button>
        </div>
    </nav>
)
}

export default Navbar;