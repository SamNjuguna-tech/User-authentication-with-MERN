import React from 'react'
import './styles/login.css';


function App() {
  return (
    <section className='login-parent-container'>
      <div className='login-system'>
      <div class="inner-section section1">
				<h1>MALAIKA INITIATIVE</h1>
        <p>Love, care and kindness to them that need it the most</p>
			</div>
      <div className='inner-section section2'>
        <form className='logIn-form' id='logIn-form' autoComplete='off'>
        <span class="title">Log In</span>
					<label class="label" for="userName">Username</label>
          <input type="text" id="usn" name="userName" required  autocomplete="off"/>
					<label class="label" for="userName">password</label>
          <input type="password" id="psw" name="userName" required/>
					<p style={{color:"red", display:"none"}} class="alert" id="input-error"></p>
					{/* <a href="#" class="register">Register</a> */}
					<input type="submit" value="Login" name="submit" class="submit-button" id="submit-button"/>
        </form>
      </div>
      </div>
    </section>
    )
}

export default App;
