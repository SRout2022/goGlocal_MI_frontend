import React from "react";
import ChoiceModalContent from "../../MarketPlace_Choice/ChoiceModal_content";
import MimodalContent from "./MImodalContent";

// Here props are Id, purpose, country. 
// Id: is used to differentiate between diffrent Modals Across different screens 
// purpose: This prop defines the purpose for which we are calling the modal. This is significant to specify the content of the Modal.
// country: This prop is of use only when we are using <ChoiceModalContent /> and we need to specify the country for which the pop-UP appears

export default function MImodal(prop) {
	return (
		<div
			class="modal fade bd-example-modal-lg"
            id = {prop.Id}
			tabindex="-1"
			role="dialog"
			aria-labelledby="myLargeModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog  modal-dialog-centered">
				<div class="modal-content">
                    {prop.purpose == "setUP" && <MimodalContent />}
					{prop.purpose == "country-marketPlace-choice" && <ChoiceModalContent country={prop.country} />}
                </div>
			</div>
		</div>
	);
}
