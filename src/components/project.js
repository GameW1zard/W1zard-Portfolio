import React from "react";

function Project (props) {
    return (
        <div className="card col-sm-6 col-md-4 col-lg-3 my-3 mx-5" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top my-3" alt={props.name} />
            <div className="card-body my-3">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">{props.btntxt}</a>
            </div>
        </div>
    )
}

export default Project;