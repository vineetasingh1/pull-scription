import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function SignInBox (props)  {

  const logged_out_nav = (
    <div><button className = "login_button" ><Link to="/login">Sign In</Link></button>
    <button className = "signup_button" ><Link to="/signup">Sign Up!</Link></button></div>
  );

  const logged_in_nav = (
    <div><button className = "logout_button" onClick={props.handle_logout}><Link to="#">Log Out</Link></button></div>
  );

  return (<div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>);

}

export default SignInBox;

SignInBox.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  handle_logout: PropTypes.func.isRequired
};

