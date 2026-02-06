import React from 'react';
import './reusable/AuthPage.css';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const handleRegister = (e) =>{
		e.preventDefault();
		navigate('/login');
	}
  return (
    <div className="auth-page-wrapper">
      <div className="auth-hero-section">
        <h1>Join Us</h1>
        <p>Create an account to start managing your portal services today.</p>
      </div>

      <div className="auth-form-section">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p className="auth-subtitle">Fill in the information below to get started.</p>
          
          <form className="auth-form">
            <div className="input-group">
              <label>Full Name</label>
              <input className="auth-input" type="text" placeholder="John Doe" required/>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input className="auth-input" type="email" placeholder="name@company.com" required/>
            </div>
            
            <div className="input-group">
              <label>Password</label>
              <input className="auth-input" type="password" placeholder="Minimum 8 characters" required/>
            </div>

            <button className="auth-btn btn-primary" onclick={handleRegister}>Create Account</button>
          </form>

          <div className="auth-footer">
            Already have an account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;