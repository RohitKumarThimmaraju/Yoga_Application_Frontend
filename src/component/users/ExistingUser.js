import React from 'react';

const ExistingUser = () => {
  return (
    <div style={{ 
        backgroundImage: `url("https://wallpaperaccess.com/full/139155.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        height: '38.8rem'
    }}>
      <br/><br/>
      <div className="box-form">
        
	      <div className="left">
		      <div className="overlay">
		        <h1>Hello User</h1>
            <br/><br/>
		        <p>Yoga began in India and has been around for about 5,000 years, says Sherwin. “Originally it was taught one-on-one and only to men of the highest caste,” she says.</p>
		      </div>
	      </div>
	
	
		    <div className="right">
		      <h5>Login</h5>
          <br/><br/>
		      <p>Don't have an account? <br/><a href="/CreateAccount">Creat Your Account</a> it takes less than a minute</p>
		      <div className="inputs">
			      <input type="text" placeholder="user name"/>
			      <br/>
			      <input type="password" placeholder="password"/>
		      </div>
			    <br/><br/>
			
		      <div className="remember-me--forget-password">
	          <label>
		          <input type="checkbox" name="item" checked/>
		          <span className="text-checkbox">Remember me</span>
	          </label>
			      <p>forget password?</p>
		      </div>
			    <br/>
			    <button>Login</button>
	      </div>
      </div>

    </div>
  )
}

export default ExistingUser
