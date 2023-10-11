import React, { useEffect } from "react";
import DashLay from "../components/Layout/Boost";
import { getUserInfo, getUsersLeaderBoard } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import BLOGO from '../Logo/1.png'


const Newdashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  const userDetails = useSelector((state) => state.userDetails.userDetails)
  const userDetailsLoading = useSelector((state) => state.userDetails.userDetailsLoading)
  const leaderBoard = useSelector((state) => state.userDetails.leaderBoard)


  useEffect(() => {
    if (user) {
      dispatch(getUserInfo(user?.id))

    }

  }, [user])

  useEffect(() => {
    dispatch(getUsersLeaderBoard())
  }, [])

  return (
    <div className="-mt-16">
      <DashLay >
        <div>{/* send coins , Bookmarked , your notes */}</div>
        <div className="flex-col lg:flex lg:flex-row gap-12 mb-4 mt-10 mr-10">
          <div className=" bg-white shadow-sm border-2 rounded-xl w-2/5 items-center content-center flex">
            <div class="flex items-center  justify-center lg:w-4/12 m-5 h-5/6 rounded-xl bg-gray-300  ">
              <img src={BLOGO} alt="Logo Here" style={{ width: '50%' }} />
            </div>
            <div>
              <h1 className="text-lg font-bold mt-1 text-left">Name: {userDetails?.username} </h1>
              <h1 className="text-lg font-bold mt-1 text-left">Year: {userDetails?.username} </h1>
              <h1 className="text-lg font-bold mt-1 text-left">Stream: {userDetails?.username} </h1>
            </div>
          </div>
          <div className="border-2 rounded-xl w-2/3 flex flex-row gap-2 p-3">
            <div className="w-2/4 px-2 ">
              <div class="flex items-center  justify-center   w-full h-28 rounded-xl bg-gray-300  mt-2 ">
                <i class="fa-solid fa-ranking-star text-yellow-600 fa-xl"></i>
                <h3 class="text-2xl font-semibold text-gray-900 ml-3">Rank: 12</h3>
              </div>

              <div class="flex items-center  justify-center w-full h-28 rounded-xl bg-gray-300  mt-2 pl-3">
                <i class="fa-solid fa-cloud-arrow-up fa-xl"></i>
                <h3 class="text-xl font-semibold text-gray-900 ml-3">
                  Notes Uploaded: <p>{userDetails?.notesUploaded}</p>
                </h3>
              </div>
            </div>
            <div className="w-2/4 px-2">
              <div class="flex items-center  justify-center  w-full h-28 rounded-xl bg-gray-300  mt-2 pl-3">
                <i class="fa-solid fa-coins fa-xl text-yellow-600"></i>
                <h3 class="text-xl font-semibold text-gray-900 ml-3">
                  Current Coins:<p>{userDetails.coins}</p>          </h3>
              </div>

              <div class="flex items-center  justify-center  w-full h-28 rounded-xl bg-gray-300  mt-2 pl-3">
                <i class="fa-regular fa-thumbs-up fa-xl fa-fade"></i>
                <h3 class="text-2xl font-semibold text-gray-900 ml-3">
                  Total Likes:{userDetails.totalLikes}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center py-3 ">
          <div class="flex flex-col items-center sm:flex-row mb-9">
            <div class="relative flex  flex-col rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-border text-yellow-900 shadow-md">
              <div class="p-6  ">
                <h5 class=" text-white block font-sans text-xl font-semibold leading-snug tracking-normal">
                  Send Coins &nbsp;
                </h5>
              </div>
            </div>

            <div class="relative flex flex-col rounded-xl mx-4 my-4 bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-border  text-blue-900 shadow-md">
              <div class="p-6">
                <h5 class=" text-white block font-sans text-xl font-semibold leading-snug tracking-normal">
                  Bookmarked
                </h5>
              </div>
            </div>

            <div class="relative flex flex-col rounded-xl  bg-gradient-to-r from-green-300 to-green-600 bg-clip-border text-green-900 shadow-md">
              <div class="p-6">
                <h5 class=" text-white block font-sans text-xl font-semibold leading-snug tracking-normal">
                  Your Notes &nbsp;
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>

            <div className="flex flex-col justify-center h-full ">
              {/* Table */}
              <div className=" rounded-lg   mx-auto bg-slate-100 shadow-lg  border  border-gray-200 w-5/6 text-2xl">
                <header className="px-5 border-b border-gray-100">
                  <h2 className="font-semibold text-center text-gray-800 mt-3">LEADERBOARD</h2>
                </header>
                <div className="p-3 ">
                  <div className="overflow-x-auto">

                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-white">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-xl text-justify ">Rank</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-xl text-justify">Name</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-xl">Coins</div>
                          </th>

                        </tr>
                      </thead>
                      <tbody className=" divide-y divide-gray-100 text-lg ">
                        {
                          leaderBoard?.map((user, index) => {
                            return (
                              <tr className>
                                <td className="text-justify">&nbsp;&nbsp;&nbsp;&nbsp;{index + 1}</td>
                                <td className="">&nbsp;&nbsp;{user?.username}</td>
                                <td className="text-center">&nbsp;&nbsp;&nbsp;{user?.coins}</td>
                              </tr>
                            )
                          })
                        }

                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /> <br /><br /> <br /><br />
      </DashLay>
    </div>
  );
};

export default Newdashboard;
