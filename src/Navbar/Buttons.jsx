import React from "react";

function ExtendedButton(prop){

    return (<button type="button" class="primary-btn">{prop.content}</button>);
}

function SmallButton(prop){
    
    return (
        <button type="button" class="secondary-btn" id={prop.Id} data-toggle="modal"
        data-target={prop.dataTar}>{prop.content}</button>
    );
}

export {ExtendedButton,SmallButton};