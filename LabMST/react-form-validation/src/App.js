import React, { useState, lazy, Suspense } from "react";
import "./index.css";

const HeaderImage = lazy(() => import("./HeaderImage"));

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showImage, setShowImage] = useState(false);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const validateUsername = (value) => {
    if (!value) {
      setUsernameError("Username is required");
    } else if (value.length < 3) {
      setUsernameError("Minimum 3 characters required");
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Password is required");
    } else if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must contain 8 characters, uppercase, lowercase and number"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateUsername(username);
    validatePassword(password);

    if (!usernameError && !passwordError && username && password) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">

      <button onClick={() => setShowImage(true)}>Load Image</button>

      {showImage && (
        <Suspense fallback={<p>Loading Image...</p>}>
          <HeaderImage />
        </Suspense>
      )}

      <form onSubmit={handleSubmit} className="form">

        <h2>Login Form</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            validateUsername(e.target.value);
          }}
        />
        {usernameError && <p className="error">{usernameError}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />
        {passwordError && <p className="error">{passwordError}</p>}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;