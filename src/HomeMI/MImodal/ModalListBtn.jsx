import React from 'react';
import "./ModalListBtn.css";

function ModalListBtn(prop) {
	return (
		<button id="item-btn-selec-prod" class="sub-top-btn">
			{prop.text}{" "}
			<button class="cross-sec">
				<i class="fa-solid fa-xmark"></i>
			</button>
		</button>
	);
}

export default ModalListBtn