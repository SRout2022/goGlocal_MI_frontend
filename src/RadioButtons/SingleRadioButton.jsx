import React from 'react'

function SingleRadioButton(prop) {
  return (
    <div  className={prop.class} >
			<label class="container-radio-btn">
				<input type="radio" checked="checked" name="radio" />
				<span class="checkmark"></span>
				{prop.value}
			</label>
		</div>
  )
}

export default SingleRadioButton