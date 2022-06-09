import React from 'react'
import MImodal from '../HomeMI/MImodal/MImodal'
import RadioButton from '../RadioButtons/RadioButton'
import SingleRadioButton from '../RadioButtons/SingleRadioButton'
import AmazonLogo from '../resources/Brand_Logos/Amazon_logo.png'
import eBAYLogo from '../resources/Brand_Logos/EBay_logo.png'
import WalmartLogo from '../resources/Brand_Logos/Walmart_logo.png'
import BrandItem from './BrandItem'
import "./choice_Modal.css"

function ChoiceModalContent(prop) {
  return (
    <div style={{margin:"2rem 2rem"}}>
        <p style={{fontSize:"100%",fontWeight:"bold", marginBottom:"2rem"}}>{prop.country} MarketPlace</p>
        <BrandItem img={AmazonLogo} buyers="310 M" visitors="2.16 M"/>
        <BrandItem img={eBAYLogo} buyers="310 M" visitors="2.16 M"/>
        <BrandItem img={WalmartLogo} buyers="310 M" visitors="2.16 M"/>
        <div class="buyStore-submit-btn-Div">
            <button class="buyStore-submit-btn" data-toggle="modal" data-target="#after-click-buyStore-submit-btn">Buy Store</button>
        </div>
        <MImodal Id="after-click-buyStore-submit-btn" puprose="specific-brand-onSelect-PopUp"/>
    </div>
  )
}

export default ChoiceModalContent