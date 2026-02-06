import React from 'react';
import './reusable/AuthPage.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }
  const handleGuest = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }
  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  }

  return (
    <div className="auth-page-wrapper">
      <div className="auth-hero-section">
        <h1>Welcome</h1>
        <p>Access your dashboard and manage your services efficiently from your desktop.</p>
      </div>

      <div className="auth-form-section">
        <div className="auth-card">
          <h2>Login</h2>
          <p className="auth-subtitle">Please enter your details to sign in.</p>
          
          <form className="auth-form">
            <div className="input-group">
              <label>Email Address</label>
              <input className="auth-input" type="email" placeholder="name@company.com" />
            </div>
            
            <div className="input-group">
              <label>Password</label>
              <input className="auth-input" type="password" placeholder="*********" />
            </div>

            <button className="auth-btn btn-primary" onClick={handleLogin}>Sign In</button>
            <button type="button" className="auth-btn btn-guest" onClick={handleGuest}>Continue as Guest</button>
          </form>

          <div className="auth-footer">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;