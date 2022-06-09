import React from 'react'
import SingleRadioButton from '../RadioButtons/SingleRadioButton'
// import AmazonLogo from '../resources/Brand_Logos/Amazon_logo.png'
// import eBAYLogo from '../resources/Brand_Logos/EBay_logo.png'
// import WalmartLogo from '../resources/Brand_Logos/Walmart_logo.png'

function BrandItem(prop) {
  return (
    <div class="each-brand-div">
            <SingleRadioButton class="choice-modal-radio-btn" value="" />
            <img class="choice-brang-logo" src={prop.img} alt="brand-img" style={{float:"left"}}></img>
            <div style={{float:"left"}}>
                <p class="choice-brand-info">No. of Buyers: {prop.buyers}</p>
                <p class="choice-brand-info">Total Visitors: {prop.visitors}</p>
                <p class="choice-brand-info">#Top performing Categories</p>
            </div>
        </div>
  )
}

export default BrandItem