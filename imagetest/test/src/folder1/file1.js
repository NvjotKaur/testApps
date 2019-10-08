import React from 'react';


const User =(props)=> {
	return (
		<div>

		<img src={props.src} />
		<button onClick={props.clickMe}> addMe </button>
		</div>
		
		)
}

export default User;