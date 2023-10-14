import React, { useEffect } from "react";
import { getUserInfo, getUsersLeaderBoard } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user)
  const userDetails = useSelector((state) => state.userDetails.userDetails)
  const userDetailsLoading = useSelector((state) => state.userDetails.userDetailsLoading)
  const leaderBoard = useSelector((state) => state.userDetails.leaderBoard)

  useEffect(() => {
    if (user) {
      console.log('user from user', user)
      dispatch(getUserInfo())
    }

  }, [user])

  useEffect(() => {
    console.log('user is', user)
    // dispatch(getUsersLeaderBoard())
  }, [])



  return (
    <div className="bg-black">
      <div>


        <div className="p-4 ">
          <div className="p-4  border-black-200 border-2 rounded-lg  dark:border-black-700 mt-6">
            <div className="flex-col lg:flex lg:flex-row  gap-4 mb-4">

              <div className="flex items-center  justify-left lg:w-3/12 w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
                <div className=" flex-col">
                  <h1 className="text-left text-white">
                    <b>{userDetails.rank}</b>
                  </h1>
                  <h3 className="text-gray-400">LEADERBOARD RANK &nbsp; &nbsp; &nbsp;  <i class="fa-solid fa-arrow-trend-up text-green-400 fa-2xl" style={{ color: "#32a11b," }} />
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-left lg:w-3/12 w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
                <div className="flex-col">
                  <h1 className="text-left text-white">
                    <b>{userDetails?.notesUploaded}</b>
                  </h1>
                  <div className="text-gray-400">NOTES UPLOADED &nbsp; &nbsp; &nbsp; <i class="fa-solid fa-upload text-green-400 fa-2xl"></i></div>
                </div>
              </div>

              <div className="flex items-center justify-left lg:w-3/12 w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
                <div className="flex-col">
                  <h1 className="text-left text-white">
                    <b>{userDetails.coins}</b>
                  </h1>
                  <h3 className="text-gray-400">CURRENT COINS &nbsp; &nbsp; &nbsp;  <i class="fa-solid fa-coins text-orange-400 fa-2xl"></i> </h3>
                </div>
              </div>
              <div className="flex items-center justify-left lg:w-3/12 w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
                <div className="flex-col">
                  <h1 className="text-left text-white">
                    <b>{userDetails.totalLikes}</b>
                  </h1>
                  <h3 className="text-gray-400">TOTAL LIKES  &nbsp; &nbsp; &nbsp;   <i class="fa-solid fa-thumbs-up fa-bounce fa-2xl text-blue-500"></i></h3>
                  <h3></h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 ">
                <h1 className="text-white"><i class="fa-solid fa-money-bill"></i>  &nbsp; SEND COINS</h1>
                <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500" />
                <h1 className="text-white"><i class="fa-solid fa-circle-plus  fa-lg" />   &nbsp; UPLOAD NOTES</h1>
                <p />
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500" />
                <h1 className="text-white"><i class="fa-solid fa-bookmark fa-lg" />   &nbsp; BOOKMARKED</h1>
                <p />
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500" />
                <h1 className="text-white"><i class="fa-solid fa-crown fa-lg" />   &nbsp; YOUR NOTES</h1>
                <p />
              </div>
            </div>
          </div>
          <br />
          <center>
            <div className="border border-white bg-gray-800">
              <table className="table-fixed text-white w-80 lg:w-5/6  text-center mx-5 my-5 bg-gray-800">
                <thead>
                  <tr>
                    <th>RANK</th>
                    <th>NAME</th>
                    <th>COINS</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    leaderBoard?.map((user, index) => {
                      return (
                        <tr className>
                          <td>{index + 1}</td>
                          <td>{user?.username}</td>
                          <td>{user?.coins}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>

            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Profile;
