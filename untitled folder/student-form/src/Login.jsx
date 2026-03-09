import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      validationErrors.name = "Name must contain only alphabets.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      validationErrors.password = "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      alert("Invalid filling: Please correct the errors before submitting.");
    } else {
      alert("Sign in successful!");
    }
  };

  return (
    <div className="icloud-container">
      <div className="icloud-card">
        <h2>Sign in with Email Address</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={formData.name} 
            onChange={handleChange} 
            className="icloud-input"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
          
          <input 
            type="text" 
            name="email" 
            placeholder="Email Address"
            value={formData.email} 
            onChange={handleChange} 
            className="icloud-input"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
          
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={formData.password} 
            onChange={handleChange} 
            className="icloud-input"
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
          
          <button type="submit" className="icloud-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;