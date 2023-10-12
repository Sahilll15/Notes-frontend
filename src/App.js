import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Nviewer from './pages/NoteViewer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './utils/PrivateRoutes';
import NotesForm from './pages/NotesForm';
import OtpForm from './pages/OtpForm';
import Navbar from './components/Navbar';

import Dashoboard from './pages/Newdashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogedinUser } from './redux/auth/authActions';
import Profile from './pages/Profile';
import Landing from './pages/Landing';

import NotesTable from './pages/AdminPanel'
import SideBar from './components/Sidebar/Sidebar';
import Room from './pages/Room';
import Video from './pages/Video';
import Notification from './pages/Notification';
import Setting from './pages/Setting';

const App = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state) => state?.user?.isAuthenticated)
  useEffect(() => {
    dispatch(getLogedinUser())
  }, [])


  return (
    <>

      <Router>
        <ToastContainer />

        <div >
          <Routes>
            <Route path="/land" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/otp" element={<OtpForm />} />

            <Route
              path="/"
              element={
                <>
                  <div className="flex">
                    <SideBar />
                    <div className="flex-grow">
                      <PrivateRoutes />
                    </div>
                  </div>
                </>
              }
            >
              <Route path="/setting" element={<Setting />} />

              <Route path="/notification" element={<Notification />} />
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<NotesTable />} />
              <Route path="/room" element={<Room />} />
              <Route path="/video" element={<Video />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addnotes" element={<NotesForm />} />
              <Route path="/admin" element={<NotesTable />} />
              <Route path="/dashboard" element={<Dashoboard />} />


            </Route>

            <Route
              path="/"
              element={
                <>
                  <div className="flex">

                    <div className="flex-grow">
                      <ToastContainer />
                      <PrivateRoutes />
                    </div>
                  </div>
                </>
              }
            >
              <Route path="/nviewer/:noteId" element={<Nviewer />} />
            </Route>


          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;