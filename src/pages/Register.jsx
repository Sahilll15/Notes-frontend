import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import logo from '../logoOld.png'
import { useState } from 'react';

// ADITYA CODE STARTS
 const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

}

// ADITYA CODE ENDS

const Register = () => {
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const [seepasword, setseepassword] = useState(false);

  const onChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleviewpassword = () => {
    setseepassword(!seepasword);
    if (seepasword) {
      document.getElementById('password').type = 'password';
      document.getElementById('cpassword').type = 'password';
    } else {
      document.getElementById('password').type = 'text';
      document.getElementById('cpassword').type = 'text';
    }
  };

  const validation = () => {
    if (formdata.password !== formdata.cpassword) {
      toast.error('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register', {
        username: formdata.username,
        email: formdata.email,
        password: formdata.password,
      });

      if (response.status === 200) {
        console.log(response.data);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('User creation failed!!');
    }
  };

  return (
    <div>
      {/* <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-blue-900 dark:text-blue-500 text-4xl"> */}
            {/* <img src={logo} alt="" style={{width:'250px',height:'130px'}}/> */}
            {/* NotesBeta
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create An Account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlhtmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Username
                  </label>
                  <input
                    type="text"
                    onChange={onChange}
                    name="username"
                    id="username"
                    value={formdata.username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required
                  />
                </div>
                <div>
                  <label htmlhtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    onChange={onChange}
                    name="email"
                    id="email"
                    value={formdata.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="user@google.com"
                    required
                  />
                </div>
                <div>
                  <label htmlhtmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={onChange}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlhtmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onChange={onChange}
                    name="cpassword"
                    id="cpassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="viewpassword"
                        aria-describedby="viewpassword"
                        onClick={handleviewpassword}
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlhtmlFor="viewpassword" className="text-gray-500 dark:text-gray-300">
                        View password
                      </label>
                    </div>
                  </div>
                
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:text-black dark:hover:bg-blue-700"
                >
                  Create Account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already a user?{' '}
                  <NavLink
                    to="/login"
                    className="font-medium text-blue-800 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Log in
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer /> */}


<div>
  
  <center>
    <div className="mt-9">
      <img src={logo} style={{width: '20%'}} alt />
      <h1 className="text-white">REGISTER NOW !</h1><br />
      <form action="/register" className="text-left w-1/3" method="post">
        <div className="form-group">
          <label htmlFor="first-name" className="text-white"><h4>NAME</h4></label>
          <input type="text" id="first-name" className="text-xl bg-slate-800 h-12 rounded-lg w-full border-2 border-violet-950" name="first-name" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-white"><h4>Email ADDRESS</h4></label>
          <input type="email" id="email" className="text-xl bg-slate-800 h-12 rounded-lg w-full border-2 border-violet-950" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-white"><h4>PASSWORD</h4></label>
          <input type="password" id="password" className="text-xl bg-slate-800 h-12 rounded-lg w-full border-2 border-violet-950" name="password" />
        </div>
        <br /><br />du
        <center>
        <button class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-2 border border-blue-700 rounded">
  REGISTER
</button>
        </center>
      </form>
      <h4 className="text-gray-500 mt-5">Already a member ? <NavLink to={'/login'} className="font-medium text-blue-600 hover:underline dark:text-blue-600 text-blue-500">LOG IN.</NavLink></h4>
    </div>
  </center>
</div>
















    </div>
  );
};

export default Register;
