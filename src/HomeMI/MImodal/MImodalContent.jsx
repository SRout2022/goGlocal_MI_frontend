import React from "react";
import RadioButton from "../../RadioButtons/RadioButton";
import AddMore from "./AddMore";
import "./mIModal.css";
import ModalListBtn from "./ModalListBtn";

export default function MimodalContent()
{
    return(
        <div class="mI-modal-content">
            <p style={{fontSize:"100%",fontWeight:"bold"}}>Marketplace Integration SetUp</p>
            <div id="mI-modal-content-2">
                <p style={{fontSize:"85%",fontWeight:"500"}}>Which Countries Marketplace you want to Integrate with?</p>
                <div style={{display:"flex", justifyContent:"left"}}>
                <ModalListBtn text="India"/>
                <ModalListBtn text="USA"/>
                <AddMore />
                </div>
            </div>
            <div id="mI-modal-content-3">
                <p style={{fontSize:"85%",fontWeight:"500"}}>Are You part of Amazon or eBay Globalselling Platform?</p>
                <RadioButton />
            </div>
            <div id="mI-modal-content-4">
                <button class="MI-modal-submit-btn">Save</button>
            </div>
        </div>
    );
}