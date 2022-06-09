import React from "react";
import Navbar from "./Navbar/Navbar";
import AddOn from "./AddOns";
import HomeMI from "./HomeMI/HomeMI";
import MImodal from "./HomeMI/MImodal/MImodal";
import MIplaces from "./MI_Places/MIplaces";

function viewScreen(screen) {
	if(screen===1)
	return (
		<div>
			<Navbar title="Home" screen="1" dataTarget="#mI-modal-Setup"/>
			<MImodal Id="mI-modal-Setup" purpose="setUP"/>
			<HomeMI />
		</div>
	);

	else if(screen===2)
	return (
		<div>
			<Navbar title="Home" screen="1" dataTarget="#mI-modal-Setup"/>
			<MIplaces />
		</div>
	);
}

export default function AppBody() {
	return (
		<div>
			<div class="above-navbar">
				<span class="section-heading"> Marketplace Integration </span>
				<AddOn />
			</div>

			{/* <Navbar title="Home"/> */}
			{viewScreen(2)}
		</div>
	);
}
