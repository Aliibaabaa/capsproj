import React from 'react';

function login() { 
return (
<form> 
<div class="form login">
<div class="form-content">
    <header>WELCOME!</header>
    <form id = "forms" action="#">
        <div class="field input-field">
            <input type="emails" placeholder="Email" class="input" required />
        </div>
       
        <div class="field input-field">
            <input type="passwords" placeholder="Password" class="password" />
            <i class='bx bx-hide eye-icon'></i>
        </div>

        <div class="form-link">
            <a href="#" class="forgot-pass">Forgot password?  '</a>
        </div>
        
        <div class="field button-field">
            <button class = "btn" type = "submit">Login</button>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /> 
          <label class="form-check-label" for="flexSwitchCheckDefault"> Remember Me  <br/> </label>
        </div>
    </form>

   
</div>

<div class="line"></div>
<div class="form-link" style="background-color:#f5f5f5; padding: 5px;">
    <span>DON'T HAVE AN ACCOUNT? <br/> 
      <a href="#" class="link signup-link">Signup   '</a></span>
</div>


</div>
</form>
);
}

export default login;