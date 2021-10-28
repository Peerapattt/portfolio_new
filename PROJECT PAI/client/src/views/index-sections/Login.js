import React from 'react'
import "assets/css/Login.css";

export default function login() {
    return (
        <div>
            <div className="login">
  <div className="login-triangle" />
  <h2 className="login-header">Log in</h2>
  <form className="login-container">
    <p><input type="email" placeholder="Email" /></p>
    <p><input type="password" placeholder="Password" /></p>
    <p><input type="submit" defaultValue="Log in" /></p>
  </form>
</div>
        </div>
    )
}
