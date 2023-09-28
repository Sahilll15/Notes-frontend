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

import Dashoboard from './pages/Dashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogedinUser } from './redux/auth/authActions';



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
        //show navbar only if the user is logged initialState
        {/* {
          userLoggedIn && <Navbar />
        } */}
        <Navbar />
        <div >
          <Routes>
            //loggedinuser routes
            <Route element={<PrivateRoutes />}>

            </Route>

            <Route element={<Home />} path="/" />

            <Route element={<Dashoboard />} path="/dashboard" />
            <Route element={<Nviewer />} path="/nviewer/:noteId" />
            <Route element={<NotesForm />} path="/addnotes" />
            <Route element={<OtpForm />} path="/otpForm" />


            //authetication routes
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
