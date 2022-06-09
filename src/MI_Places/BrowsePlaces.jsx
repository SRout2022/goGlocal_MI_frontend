import React from "react";
import PlaceCards from "./PlaceCards/PlaceCards";
import Canada from "../resources/Places Image/canada.png";
import france from "../resources/Places Image/france.png";
import Germany from "../resources/Places Image/Germany.png";
import Indonesia from "../resources/Places Image/Indonesia.png";
import Spain from "../resources/Places Image/Spain.png";
import UAE from "../resources/Places Image/UAE.png";
import UK from "../resources/Places Image/UK.png";
import US from "../resources/Places Image/US.png";
import Italy from "../resources/Places Image/Italy.png";
import MImodal from "../HomeMI/MImodal/MImodal";

function BrowsePlaces() {
	return (
		<div>
			<PlaceCards img={france} />
			<PlaceCards img={Germany} />
			<PlaceCards img={US} dataTar = "#mI-modal-choice"/>
			<PlaceCards img={Indonesia} />
			<PlaceCards img={Spain} dataTar = "#mI-modal-choice2"/>
			<PlaceCards img={UAE} />
			<PlaceCards img={Canada} />
			<PlaceCards img={UK} />
			<PlaceCards img={Italy} />
            <PlaceCards img={US} />
			<PlaceCards img={UK} />
			<PlaceCards img={Italy} />
			<MImodal Id="mI-modal-choice" purpose="country-marketPlace-choice" country="USA"/>
			<MImodal Id="mI-modal-choice2" purpose="country-marketPlace-choice" country="Spain"/>
		</div>
	);
}

export default BrowsePlaces;
