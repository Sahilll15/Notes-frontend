import React from 'react'
import Alternate from '../components/Layout/HomeLay';
import Search from '../components/Searchchat';


const Generalchat = () => {
  return (
    <Alternate>
      <p className='justify-center text-center text-3xl font-bold pt-5'>General and Important Topics</p>
      <form className="w-5/6 border-2 px-3 mt-4 mx-auto">
        <div className="my-4 ">
          <textarea

            className="w-full p-4 border h-14 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="What's on your mind?"
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="text-right my-2">
            <button
              class="group w-24 h-8 ml-2 relative z-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br flex items-center font-medium text-white transition-all duration-200 ease-in-out rounded-lg px-4 py-2 active:scale-95 active:shadow-inner"

              type='submit'
            >
              <div class="absolute -z-10 -inset-0.5  rounded-xl blur-xl group-hover:opacity-100 animate-pulse group-hover:inset-10"></div>
              <div class="svg-wrapper transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class=""
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
              {/* <span class="ml-1 text-white transition-all duration-300 group-hover:text-transparent">
                {
                  postLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    'Post'
                  )
                }
              </span> */}
            </button>


          </div>
      </form>
      
      <Search />
    
      <br />

    </Alternate>
  )
}

export default Generalchat