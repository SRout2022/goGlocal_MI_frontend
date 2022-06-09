import React from "react";
import "./CardMI.css"

function CardMI(prop)
{
    return (
        <div class="card">
            <img class="card-img-top" src={prop.img} alt="Card cap" />
            <div class="card-body-sec">
                <p class="card-text">{prop.content}</p>
            </div>
        </div>
    );
}

export default CardMI;