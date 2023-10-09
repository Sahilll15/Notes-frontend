import React from 'react'
import Alternate from '../components/Layout/Alternate'
import MainLayout from '../components/Layout/MainLayout'

const Profile = () => {
  return (
    <Alternate>
    <div className="bg-white w-full flex flex-col md:flex-row items-center">
  <img src="https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png" style={{width:'25%'}} className="w-15 mb-4 md:mb-0" alt="" />
  <div className="flex-grow p-4 text-center md:text-left ml-5">
    <h2 className="text-xl font-bold mb-2">User Name</h2>
    <p>Your Name</p>
    <h2 className="text-xl font-bold mt-4 mb-2">Email</h2>
    <p>abc@gmail.com</p>
    <h2 className="text-xl font-bold mt-4 mb-2">Github</h2>
    <p><a href="https://github.com/yourusername" className="text-blue-500">https://github.com/aditya</a></p>
    <h2 className="text-xl font-bold mt-4 mb-2">Other link</h2>
    <p><a href="https://github.com/yourusername" className="text-blue-500">https:/tya</a></p>
  </div>
</div>



    </Alternate>
  )
}

export default Profile