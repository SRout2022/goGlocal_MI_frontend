import { SmallButton } from "../Navbar/Buttons";
import bgImg from "../resources/mI_home-img.png";
import "./homeCard.css";

export default function HomeCard() {
	return (
		<div class="container">
			<img src={bgImg} alt="Background-Images"></img>
			<div class="text-1">Welcome to Our</div>
			<div class="text-2">Order Management</div>
			<div class="text-3">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam
				porta, porta eros eget, tempor lacus. Fusce vitae neque magna. Phasellus
				nec eros volutpat, posuere odio ac, aliquam sapien.
			</div>
            <div class="button-sec">
                <SmallButton content="SetUp" Id="home-set-btn"/>
            </div>
		</div>
	);
}
