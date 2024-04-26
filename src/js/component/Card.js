import React from "react";
import "../../styles/Card.css"


export function Card(props) {
    return (
        <div className="content text-center">
            <div className="contenido_card">
                <img className="img" src={props.img} />

                <div className="card__info">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <a href="#" className="btn btn-primary">Find OutMore!</a>

                </div>
            </div>
        </div>
    );
}
