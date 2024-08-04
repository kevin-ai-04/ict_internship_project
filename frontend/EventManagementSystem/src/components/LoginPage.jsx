import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h1>Events</h1>
          <h2>Welcome Back</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="forgot-password">Forgot your password?</p>
        <p className="signup-prompt">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
