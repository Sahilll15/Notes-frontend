import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Room = () => {
    const user = useSelector((state) => state?.auth?.user)
    const { roomId } = useParams();

    const Mymeeting = async (element) => {
        const appID = 1792340178;

        const serverSecret = "11e25d072a125632cf37fa93ed2ec990";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), user?.fullName || 'username');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,

            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };


    return (
        <center>
            <div style={{ marginTop: '80px', width: '130vh', backgroundColor: 'white', textAlign: 'center', padding: '20px' }}>
                <div ref={Mymeeting} />
            </div>
        </center>

    )
}

export default Room;