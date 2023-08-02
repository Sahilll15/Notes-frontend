import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import logo from '../logoOld.png'

const Login = () => {
    const [formdata,setFormdata]=useState({email:'',password:''})
    const [seepassword,setseepassword]=useState(false)
    const navigate=useNavigate();


    const handleViewPassword=()=>{
        setseepassword(!seepassword);
        if(seepassword){
            document.getElementById('password').type='password';
        }
        else{
            document.getElementById('password').type='text';
        }
    }

    const onChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }

    const login = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/v1/users/login', {
            email: formdata.email,
            password: formdata.password,
          });
      
          if (response.status === 200) {
            localStorage.setItem('jwt_secret', response.data.token);
            navigate('/');
            toast.success('User logged in successfully!');
            setFormdata({ email: '', password: '' });
          }
        } catch (error) {
          console.log(error);
          const errorMessage = error.response?.data?.message || 'User login failed!';
          toast.error(errorMessage);
        }
      };
      
    const handleSubmit=(e)=>{
        e.preventDefault();

       login();
    }


  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-blue-900 dark:text-blue-500 text-4xl">
            <img src={logo} alt="" style={{width:'250px',height:'130px'}}/>
            NotesBeta
          </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={onChange}  />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange}  />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="viewpassword" name='viewpassword' aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  onClick={handleViewPassword} /> 
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">View password</label>
                          </div>
                      </div>
                      <NavLink to={'/OtpForm'} className="text-sm font-medium text-primary-600 hover:text-white   dark:text-primary-500">Forgot password?</NavLink>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:text-black dark:hover:bg-blue-700">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <NavLink to={'/register'} className="font-medium text-blue-600 hover:underline dark:text-blue-600 text-blue-500">Sign up</NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>



</div>
  )
}

export default Login