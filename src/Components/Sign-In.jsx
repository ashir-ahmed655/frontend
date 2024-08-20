import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored user data from sessionStorage
    const storedEmail = sessionStorage.getItem('userEmail');
    const storedPassword = sessionStorage.getItem('userPassword');

    // Validate credentials
    if (email === storedEmail && password === storedPassword) {
      const firstName = email.split('@')[0]; // Extract first name from email
      sessionStorage.setItem('firstName', firstName);

      // Show success message and redirect
      setShowSuccess(true);
      setErrorMessage(''); // Clear any previous error messages
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 3000); // Redirect after 3 seconds (increased time)
    } else {
      setErrorMessage('Invalid credentials'); // Show error if login fails
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black-600 text-white">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign in</h2>
        <p className="text-center mb-6">
          New user? <Link to="/signup" className="text-blue-500">Create an account</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">
              {errorMessage}
            </div>
          )}
          <div className="mb-4 text-right">
            <Link to="/forgot-password" className="text-blue-500">Forgot Your Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            SIGN IN
          </button>
        </form>
        {showSuccess && (
          <div className="mt-4 p-4 bg-green-600 text-white rounded-md text-center">
            Login successful! Redirecting to homepage...
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
