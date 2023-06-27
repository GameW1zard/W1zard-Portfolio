import React from "react";
import github from "../assets/images/github.png";

function Footer () {
    return (
        <footer className="footer mt-auto py-2 text-center fixed-bottom" style={{backgroundColor: "#7A508F"}}>
                <div className="">
                    <a href="https://github.com/GameW1zard"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"></img></a>
                    <a href="https://www.twitch.tv/game_w1zard"><img src="https://img.icons8.com/ios-filled/50/000000/twitch.png" alt="github"></img></a>
                    <a href="https://www.linkedin.com/in/riven-loya-601116b1/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="github"></img></a>
                </div>
        </footer>
    )
}

export default Footer;