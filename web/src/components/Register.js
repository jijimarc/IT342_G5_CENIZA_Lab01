import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './reusable/AuthPage.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration Successful!");
        navigate('/login');
      } else {
        const errorData = await response.json();
        alert("Registration failed: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Cannot connect to server. Ensure backend is running.");
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-hero-section">
        <h1>Join Us</h1>
        <p>Create an account to start managing your portal services today.</p>
      </div>
      <div className="auth-form-section">
        <div className="auth-card">
          <h2>Create Account</h2>
          <form className="auth-form" onSubmit={handleRegister}>
            <div className="input-group">
              <label>Email Address</label>
              <input 
                name="userEmail"
                type="email" 
                className="auth-input"
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input 
                name="userPassword"
                type="password" 
                className="auth-input"
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input 
                name="confirmPassword"
                type="password" 
                className="auth-input"
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className="auth-btn btn-primary">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;