import React from "react";

import CardMI from "./CardMI";
import HomeCard from "./HomeCard";

export default function HomeMI() {
    return (

            <div>
              <div>
                <HomeCard />
              </div>
              <div class="row" style={{marginLeft:"6rem"}}>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <CardMI img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="Browse Marketplaces"/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <CardMI img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="My Marketplaces"/>
                </div>
              </div>
             
            </div>

    );
  }