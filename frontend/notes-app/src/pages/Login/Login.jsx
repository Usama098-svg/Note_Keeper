import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/Navbar/input/PasswordInput';
import { validateEmail } from "../../utils/helper";
import axiosInstance from '../../utils/axiosInstance';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");

    // Login API call
    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password
      });
      
      console.log(response.data); // Log the response data for debugging

      if (response.data) {
        navigate("/home");
      }

    } catch (error) {
      console.log(error); // Log the error for debugging
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleLogin}>
            <h4 className='text-2xl mb-7 font-bold'>Login</h4>
            <input
              type="text"
              placeholder='Email'
              className='w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-600 text-xs pb-1">{error}</p>}
            <button type='submit' className="w-full text-sm bg-blue-500 text-white p-2 rounded my-1 hover:bg-blue-600">Login</button>
            <p className='text-sm text-center mt-4'>Not registered yet? <Link to="/signup" className="font-medium text-blue-500 hover:text-blue-600 underline">Create an Account</Link> </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
