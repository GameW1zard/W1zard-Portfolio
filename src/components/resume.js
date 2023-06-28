import React from "react";

function Resume () {
    return (
        <div className="container text-center d-flex flex-grow-1" style={{backgroundColor: "#2CECA8", height: "100vh", }}>
        <div className="content row mx-5">
        <div className="" style={{height: "100vh"}}>
        <div>
            <ul className="list-group my-3">
            <li className="list-group-item"><h4>Software skills</h4></li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">Css</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">ExpressJS</li>
                <li className="list-group-item">Unity</li>
                <li className="list-group-item">Blender</li>                
            </ul>
            <ul className="list-group my-3">
            <li className="list-group-item"><h4>Hardware skills</h4></li>
                <li className="list-group-item">Vintage electronics repair</li>
                <li className="list-group-item">CUstom Pc building</li>
                <li className="list-group-item">Game Console repair</li>
                <li className="list-group-item">Phone repair</li>               
            </ul>

        </div>
        </div>
        </div>
        <div className="content row mx-5">
        <div className="col-sm-" style={{height: "100vh"}}>
        <div>
            <ul className="list-group my-3">
                <li className="list-group-item"><h4>Network skills</h4></li>
                <li className="list-group-item">Server management</li>
                <li className="list-group-item">Virtualization</li>
                <li className="list-group-item">Hardware confiuration</li>
                <li className="list-group-item">Hardware</li>                
            </ul>
            <a href="https://drive.google.com/file/d/1OKoZLMOcVwhqQOWY8HciPwCYZKyOY6i-/view?usp=sharing" className="btn btn-primary my-3">Download resume here!</a>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Resume;