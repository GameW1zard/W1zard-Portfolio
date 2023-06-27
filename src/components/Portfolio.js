import React from "react";
import logo from "../assets/images/logo.png";
import placeholder from "../assets/images/placeholder.jpg"
import GamerLi from "../assets/images/GamerLi.png"
import youtube from "../assets/images/youtube.png"

function Portfolio () {
    const text = "hello world this is the portfolio page";

    return (
        <div id="grow" className="content" style={{height: '100px'}}>
    <div className="container text-center" style={{backgroundColor: "#2CECA8"}}>
        <div className="row">
            <div className="col-sm-4 my-5">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top bg-dark" src={logo} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">HatBot</h5>
                <p className="card-text">A friendly little bot to manage my discord and twitch! Integrated with GamerLi!</p>
                <a href="https://github.com/GameW1zard/HatBot" class="btn btn-primary">Repo</a>
                </div>
                </div>           
            </div>

            <div className="col-sm-4 my-5 align-items-center">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top bg-dark" src={GamerLi} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">GamerLi</h5>
                <p className="card-text">A web based Physical console and game manager</p>
                <a href="http://w1zard.tech:3001/" class="btn btn-primary">GamerLi</a>
                </div>
                </div>           
            </div>

            <div className="col-sm-4 my-5">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top bg-dark" src={youtube} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">Minecraft within Minecraft</h5>
                <p className="card-text">Playing around with AMP software led me to this silly idea wich ended up working pretty well!</p>
                <a href="https://youtu.be/L7qQ9NSZG_c" class="btn btn-primary">Youtube</a>
                </div>
                </div>           
            </div>
    </div>
    </div>

    <div className="container text-center " style={{backgroundColor: "#2CECA8", height: '700px',}}>
        <div className="row flex-grow-1">
            <div className="col-sm-4 my-5">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top bg-dark" src={placeholder} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">Coming Soon</h5>
                <p className="card-text">No project here yet.</p>
                <a href="https://github.com/GameW1zard" class="btn btn-primary">Stay Tuned!</a>
                </div>
                </div>           
            </div>

            <div className="col-sm-4 my-5">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top bg-dark" src={placeholder} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">Coming Soon</h5>
                <p className="card-text">No project here yet.</p>
                <a href="https://github.com/GameW1zard" class="btn btn-primary">Stay Tuned!</a>
                </div>
                </div>           
            </div>

            <div className="col-sm-4 my-5">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top bg-dark" src={placeholder} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">Coming Soon</h5>
                <p className="card-text">No project here yet.</p>
                <a href="https://github.com/GameW1zard" class="btn btn-primary">Stay Tuned!</a>
                </div>
                </div>           
            </div>
    </div>
    </div>

</div>
    
    
    )
}

export default Portfolio;