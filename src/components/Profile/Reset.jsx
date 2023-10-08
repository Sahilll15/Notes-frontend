import React, { useState } from "react";

const Reset = () => {
  return (
    <div className="-mt-8">
        <center>
      <div className="antialiased w-8/12 ">
        <div className="max-w-full mx-auto my-10 bg-white p-3 rounded-xl border-2 shadow-xl border-gray-300">
          <h1 className="text-4xl font-medium text-center">Reset password</h1>
          <p className="text-slate-500 text-center">Fill up the form to reset the password</p>
          
            <form className="my-10">
              <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                  <p className="font-medium text-slate-700 pb-2">Email address</p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter email address"
                    
                  />
                </label>
                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                >
                  <span>Send Email</span>
                </button>
              </div>
            </form>
          
        </div>
      </div>
      </center>
    </div>
  );
};

export default Reset;