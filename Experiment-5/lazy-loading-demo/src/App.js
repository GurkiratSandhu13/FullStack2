import React, { useState, Suspense, lazy } from 'react';
import './App.css';

// Lazy loading the HeaderImage component
const HeaderImage = lazy(() => import('./components/HeaderImage'));

function App() {
  const [showImage, setShowImage] = useState(false);
  
  // Controlled form states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Touched states for validation
  const [touchedUser, setTouchedUser] = useState(false);
  const [touchedPass, setTouchedPass] = useState(false);

  // Validation feedback
  const validateUsername = (val) => {
    if (!val) return 'Username is required';
    if (val.length < 3) return 'Username must be at least 3 characters';
    return '';
  };

  const validatePassword = (val) => {
    if (!val) return 'Password is required';
    if (val.length < 8) return 'Password must be at least 8 characters';
    if (!/(?=.*[a-z])/.test(val)) return 'Password must contain at least one lowercase letter';
    if (!/(?=.*[A-Z])/.test(val)) return 'Password must contain at least one uppercase letter';
    if (!/(?=.*\d)/.test(val)) return 'Password must contain at least one number';
    return '';
  };

  const usernameError = validateUsername(username);
  const passwordError = validatePassword(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouchedUser(true);
    setTouchedPass(true);

    if (!usernameError && !passwordError) {
      alert(`Form submitted successfully!\nUsername: ${username}`);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        
        <button 
          className="load-btn" 
          onClick={() => setShowImage(true)}
          disabled={showImage}
        >
          {showImage ? 'Image Loaded' : 'Load Image'}
        </button>

        {showImage && (
          <Suspense fallback={<div className="loading-fallback">Loading image...</div>}>
            <HeaderImage />
          </Suspense>
        )}

        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setTouchedUser(true);
              }}
              onBlur={() => setTouchedUser(true)}
              placeholder="Enter username"
            />
            {touchedUser && usernameError && (
              <p className="error-text">{usernameError}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setTouchedPass(true);
              }}
              onBlur={() => setTouchedPass(true)}
              placeholder="Enter password"
            />
            {touchedPass && passwordError && (
              <p className="error-text">{passwordError}</p>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={!!(usernameError || passwordError)}
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}

export default App;