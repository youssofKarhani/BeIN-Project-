import React, { Component, useState,useCallback,useEffect } from 'react';
import { useHistory,useNavigate } from "react-router-dom";

import "./login.css";

function Login() {

  let navigate = useNavigate();


 
  const handleClick = () => {
    
    navigate('/profile');
  }
  

 

   return (
    <div>

     

     <h1>thisis the LOGIN page {'\n'}</h1>

     <div>
      <div>
    <input id="username" value = {inputText} onChange={inputTextHandler} type="text" placeholder="username"/><br/>
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