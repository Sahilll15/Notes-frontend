import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Video = () => {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='p-16'>
                <div className="container mx-auto flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white shadow-lg rounded-lg">
                        <div className="md:rounded-lg md:flex md:justify-center md:items-center md:flex-col">
                            {/* You can insert an image here if needed */}
                        </div>
                        <div className="md:mt-0">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Enter the room code here:</h3>
                            </div>
                            <div className="flex items-center mb-3">
                                <input
                                    value={roomCode}
                                    onChange={(e) => setRoomCode(e.target.value)}
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter the room code"
                                    required
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg w-full"
                                    type="submit"
                                >
                                    Enter the room
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Video;
