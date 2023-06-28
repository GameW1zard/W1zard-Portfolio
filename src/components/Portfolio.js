import React from "react";
import logo from "../assets/images/logo.png";
import placeholder from "../assets/images/placeholder.jpg"
import GamerLi from "../assets/images/GamerLi.png"
import youtube from "../assets/images/youtube.png"
import Project from "./project";
const hatbot = {
    name: "HatBot",
    description: "A friendly little bot to manage my discord and twitch! Integrated with GamerLi!",
    image: logo,
    link: "https://github.com/GameW1zard/HatBot",
    btntxt : "Go to HatBot!"
}
const gamerli = {
    name: "GamerLi",
    description: "A web based Physical console and game manager",
    image: GamerLi,
    link: "http://w1zard.tech:3001/",
    btntxt : "Go to GamerLi!"
}
const Minecraft = {
    name: "Minecraft within Minecraft",
    description: "Playing around with AMP software led me to this silly idea wich ended up working pretty well!",
    image: youtube,
    link: "https://youtu.be/L7qQ9NSZG_c",
    btntxt : "Watch the video!"
}
const placeholdercard = {
    name: "Coming Soon",
    description: "No project here yet.",
    image: placeholder,
    link: "",
    btntxt : "Stay Tuned!"
}
function Portfolio () {
    const text = "hello world this is the portfolio page";

    return (
        <div id="grow" className="content" style={{height: '100px'}}>
    <div className="container text-center" style={{backgroundColor: "#2CECA8"}}>
        <div className="row">
            <Project {...hatbot} />

            <Project {...gamerli} />

            <Project {...Minecraft} />
    </div>
    </div>

    <div className="container text-center " style={{backgroundColor: "#2CECA8", height: '700px',}}>
        <div className="row flex-grow-1">
            <Project {...placeholdercard} />
            <Project {...placeholdercard} />
            <Project {...placeholdercard} />
    </div>
    </div>

</div>
    
    
    )
}

export default Portfolio;