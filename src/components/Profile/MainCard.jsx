import React, { useState } from "react";

const MainCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="mt-64">
        <main className="profile-page">
          <section className="relative block h-500-px">
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x={0}
                y={0}
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="Cant ffetch"
                          src="https://entrepreneursconnect.s3.ap-south-1.amazonaws.com/651250307ea1e18d7f8d69ae/profile/ew.jpg"
                          className="shadow-xl rounded-full h-92 w-92 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 "
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Connect
                        </button>
                        <button
                          className=" uppercase text-black font-bold hover:shadow-md text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <i
                            class="fa-solid fa-gear fa-xl"
                            onClick={() => setShowModal(true)}
                          ></i>
                          {showModal && (
                            <div className="modal fixed inset-0 z-50 flex p-2  items-center justify-center">
                              <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                              <div
                                className="bg-white p-2 rounded-lg shadow-lg z-10 w-11/12 "
                                style={{
                                  maxHeight: "800px",
                                  overflowY: "auto",
                                  top: "80%",
                                }}
                              >
                                <h2 className="text-xl  text-center mb-2">
                                  EDIT PROFILE PAGE
                                </h2>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-2 px-4 rounded mt-4"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            22
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Friends
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            10
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Photos
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            89
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      ADITYA SHAH
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                      Mumbai
                    </div>

                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      University of Mumbai
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          BIO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainCard;
