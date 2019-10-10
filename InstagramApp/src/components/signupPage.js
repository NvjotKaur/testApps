import React from 'react';
import {connect} from 'react-redux';

const SignUp=()=>{
	return(
		<div>
			<h1 className="h1">Welcome To SignUp Page</h1> <br/>
			<input type="text" placeholder="FirstName"/> <br/> <br/>
			<input type="text" placeholder="LastName"/> <br/> <br/>
			<input type="text" placeholder="email"/> <br/> <br/>
			<button onClick={this.props.onSubmit}>SignUp</button>


		</div>
		)
}
const mapStateToProps=(state)=>{
		return{
			firstname:state.firstname,
			lastname:state.lastname,
			email:state.email
		}
	}
	const mapDispatchToProps=(dispatch)=>{
		return{
			onSubmit: ()=> dispatch({type:"ON_SUBMIT"})
		}
	}
export default connect(mapStateToProps, mapDispatchToProps) (SignUp);