import React, { useEffect, useState } from "react";
import DashLay from "../components/Layout/Dash";
import { getUserInfo, getUsersLeaderBoard } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import Lottery from "../components/Lottery";
import SendMoneyCard from "../components/SendMoney";


const Newdashboard = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }
  const user = useSelector((state) => state.user.user);
  const userDetails = useSelector((state) => state.userDetails.userDetails);
  const userDetailsLoading = useSelector(
    (state) => state.userDetails.userDetailsLoading
  );
  const leaderBoard = useSelector((state) => state.userDetails.leaderBoard);

  useEffect(() => {
    if (user) {
      dispatch(getUserInfo(user?.id));
    }
  }, [user]);

  useEffect(() => {
    dispatch(getUsersLeaderBoard());
  }, []);

  return (
    <div>
      <DashLay>
        <div>{/* send coins , Bookmarked , your notes */}</div>
        
        <div className="flex-col lg:flex lg:flex-row gap-12 mb-4">
          <div class="flex items-center  justify-center lg:w-4/12  w-full h-28 rounded-xl bg-gray-50  mt-2 pl-3">
            <i class="fa-solid fa-ranking-star text-yellow-600 fa-xl"></i>
            <h3 class="text-2xl font-semibold text-gray-900 ml-3">Rank: {user?.rank}</h3>
          </div>

          <div class="flex items-center  justify-center lg:w-4/12 w-full h-28 rounded-xl bg-gray-50  mt-2 pl-3">
            <i class="fa-solid fa-cloud-arrow-up fa-xl"></i>
            <h3 class="text-xl font-semibold text-gray-900 ml-3">
              Notes Uploaded: <p>{user?.notesUploaded}</p>
            </h3>
          </div>

          <div class="flex items-center  justify-center lg:w-4/12 w-full h-28 rounded-xl bg-gray-50  mt-2 pl-3">
            <i class="fa-solid fa-coins fa-xl text-yellow-600"></i>
            <h3 class="text-xl font-semibold text-gray-900 ml-3">
              Current Coins:<p>{user?.coins}</p>{" "}
            </h3>
          </div>

          <div class="flex items-center  justify-center lg:w-4/12 w-full h-28 rounded-xl bg-gray-50  mt-2 pl-3">
            <i class="fa-regular fa-thumbs-up fa-xl fa-fade"></i>
            <h3 class="text-2xl font-semibold text-gray-900 ml-3">
              Total Likes:{userDetails.totalLikes}
            </h3>
          </div>
        </div>

        {modalOpen && (
      <div id="myModal" className="modal">
        <div className="modal-content ">
          <span className="close cursor-pointer bg-white p-3" onClick={closeModal}>&times;</span>
          <SendMoneyCard/>
        </div>
      </div>
       )}

        <div className="flex justify-center py-3">
      <div className="flex flex-col items-center sm:flex-row mb-9">
        <div className="relative flex flex-col rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-500 bg-clip-border cursor-pointer text-yellow-900 shadow-md mx-4"
        onClick={openModal}>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal">
              Send Coins
            </h5>
            
          </div>
        </div>

        <div className="relative flex flex-col rounded-xl bg-gradient-to-r mx-4 my-4 from-green-200 to-green-600 bg-clip-border text-green-900 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal">
              Your Notes
            </h5>
          </div>
        </div>

        <div className="relative flex flex-col rounded-xl bg-gray-200 bg-clip-border my-4">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal">
              <Lottery />
            </h5>
          </div>
        </div>
      </div>
     
    </div>
   
        <div>
          <div>
            <div className="flex flex-col justify-center h-full ">
              {/* Table */}
              <div className="w-full rounded-lg   mx-auto bg-slate-100 shadow-lg  border  border-gray-200">
                <header className="px-5 border-b border-gray-100">
                  <h2 className="font-semibold text-center text-gray-800">
                    LEADERBOARD
                  </h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-white">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Rank</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Name</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Coins</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {leaderBoard?.map((user, index) => {
                          return (
                            <tr className>
                              <td>&nbsp;&nbsp;&nbsp;&nbsp;{index + 1}</td>
                              <td>&nbsp;&nbsp;{user?.username}</td>
                              <td>&nbsp;&nbsp;&nbsp;{user?.coins}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <br />
        <br /> <br />
        <br /> <br />
        <br />
      
      </DashLay>
     
    </div>
  );
};

export default Newdashboard;
