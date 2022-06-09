import React from "react";
import "./placeCard.css";

function PlaceCards(prop) {
	return (
		<div class="card">
			<img class="card-img-top" src={prop.img} alt="Card cap" data-toggle="modal"
        data-target={prop.dataTar}/>
			{/* <div class="card-body-sec">
				<p class="card-text">{prop.content}</p>
			</div> */}
		</div>
	);
}

export default PlaceCards;
