import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

function LoginPage() {
  return (
    <section>
      <div className="login-box">
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
          </Routes>
        </Router>
      </div>
    </section>
  );
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMerchant();
  };

  const createMerchant = async () => {
    setSubmitting(true);
    try {
      const data = {
        username: formData.username,
        password: formData.password,
      };

      const response = await axios.post('http://localhost:3001/login_page', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
      setError('');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="person"></ion-icon>
        </span>
        <input type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required data-aos="fade-right" />
        <label>Username</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="eye-off"></ion-icon>
        </span>
        <input type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required data-aos="fade-right" />
        <label>Password</label>
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">
          <i>Forgotten Password?</i>
        </a>
      </div>

      <button type="submit" disabled={submitting} data-aos="fade-up">
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
      <br />
      <br />
      <h5>___ OR ___</h5>
      <div className="log-google">

        <GoogleOAuthProvider clientId="476717558763-pbbvpjdugi7ium3eprbclkqn8f61hllf.apps.googleusercontent.com">

          <GoogleLogin
            onSuccess={credentialResponse => {
              const details = jwt_decode(credentialResponse.credential);
              console.log(details)
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>

      </div>
      <div className="register-link">
        <p>
          Don't have an account? <Link to="/RegisterPage">Register</Link>
        </p>
      </div>
    </form>
  );
}
export default LoginPage;