import React from 'react';

const Form=(props)=>{
	return(
		<div className="div2">
		<form  onSubmit={props.loadWeather}>

		 Country:
		<input type="text" name="country" placeholder="country"/>
		<br/>
		<br/>
		City:
		<input type="text" name="city" placeholder="city"/>
		<br/>
		<br/>
		<button>Click me to get weather </button>

		</form> 	
		</div>
		)

}
export default Form;