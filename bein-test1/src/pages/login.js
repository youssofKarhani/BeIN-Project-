import React, { Component, useState,useCallback,useEffect } from 'react';
import { useHistory,useNavigate } from "react-router-dom";

import "./login.css";

function Login() {

  let navigate = useNavigate();

  const [inputUsername, setInputUsername] = useState ("");
 
  const handleClick = () => {
    
    navigate('/profile');
  }
  
  function inputUsernameHandler (e)  {
    // console.log(e.target.value);
     setInputUsername(e.target.value);
 };
 

   return (
    <div>

     

     <h1>thisis the LOGIN page {'\n'}</h1>

     <div>
      <div>
    <input id="username" value = {inputUsername} onChange={inputUsernameHandler} type="text" placeholder="username"/><br/>
    </div>
    <div>
    <input type="text" placeholder="password"/>
    </div>
    <div>
    <button className="button" onClick={handleClick}
      ><span>LOGIN </span></button>
      </div>
      </div>

</div>
  );
}

export default Login;