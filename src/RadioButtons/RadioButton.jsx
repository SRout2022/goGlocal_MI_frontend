import React from "react";
// import "./radioButton.css";

function RadioButton() {
	return (
		<div style={{ fontSize: "85%" }}>
			<label class="container-radio-btn">
				<input type="radio" checked="checked" name="radio" />
				<span class="checkmark"></span>
				Yes
			</label>
			<label class="container-radio-btn" style={{ marginLeft: "6rem" }}>
				<input type="radio" checked="checked" name="radio" />
				<span class="checkmark"></span>
				No
			</label>
		</div>
	);
}

export default RadioButton;
