import React, { useState } from 'react';
import './Signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for submitting form data
  };

  return (
   <>
    <div className="signup-form">
    <div className="heading">SignUp for Organization</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <label className='label'>Insert Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
};

export default SignUp;
