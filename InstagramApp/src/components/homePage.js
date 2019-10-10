import React from 'react';
import {Link} from 'react-router-dom';




const Home =()=>{
	return(
		<div>

		<body>

			<h1 className="h1">Welcome To Instagram Home Page</h1>
			<br/>

			
				<img className="img1" src="https://marketingland.com/wp-content/ml-loads/2016/12/instagram-logo-gradient2-ss-1920.jpg"/>
				<br/> <br/>
				
				<input type="text" placeholder="Username"/> <br/> <br/>
				<input type="text" placeholder="Email"/> <br/> <br/>
				<button > Login </button> <br/> <br/>
				<Link to="/SignUp"><button > SignUp </button> </Link>
				
		</body>
		</div>

	)
}
	



export default Home;



