import React, {useState} from "react";
import BrowsePlaces from "../BrowsePlaces";
import MyPlaces from "../MyPlaces";
import "./secNav.css";

function SecNavbar(prop) {
	
	
	// document.getElementById("dash-onSelect-2").style.marginTop = "0";

	const [screen, setScreen] = useState(prop.screen);

	// toggleColor(prop.screen)

	function toggleColor(elem) {

		if(elem == 1)
		{
			document.getElementById("dash-onSelect-1").style.visibility = "visible";
			document.getElementById("dash-onSelect-2").style.visibility = "hidden";
			// switchScreen(1);
			setScreen("1");
			
		}

		else if(elem == 2)
		{
			console.log("LI clicked" + elem);
			document.getElementById("dash-onSelect-1").style.visibility = "hidden";
			document.getElementById("dash-onSelect-2").style.visibility = "visible";
			setScreen("2"); 
		}

		
	}


	function switchScreen(screen)
	{
		if(screen == 1)
			return (
				<BrowsePlaces />
			);
		
		else
			return(<MyPlaces/>);
	}

	

	return (
		<div style={{marginTop:"4rem"}}>
			<nav>
				<ul>
					<li class="list-items" onClick={() => toggleColor(1)}>
						<a class="anchor-select">Browse MarketPlaces</a>
						<hr id="dash-onSelect-1" style={{marginTop: "0"}}></hr>
					</li>
					<li class="list-items" onClick={() => toggleColor(2)}>
						<a class="anchor-select">My MarketPlaces</a>
						<hr id="dash-onSelect-2" style={{marginTop: "0"}}></hr>
					</li>
				</ul>
			</nav>
			<div id="MI-places-body">
				{/* {switchScreen(prop.screen)}; */}
				{screen == 1 && <BrowsePlaces />}
				{screen == 2 && <MyPlaces/>}
			</div>
			
		</div>
	);

	
}

export default SecNavbar;
