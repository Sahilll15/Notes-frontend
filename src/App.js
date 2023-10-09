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
import Profile from './pages/Profile';
import Landing from './pages/Landing';

import NotesTable from './pages/AdminPanel'


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

        {
          userLoggedIn ? <Navbar /> : null
        }
        <div >
          <Routes>
            //loggedinuser routes
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/" />
              <Route element={<NotesTable />} path="/admin" />
              <Route element={<Dashoboard />} path="/dashboard" />
              <Route element={<Nviewer />} path="/nviewer/:noteId" />
              <Route element={<NotesForm />} path="/addnotes" />
              <Route element={<NotesTable />} path="/admin" />


            </Route>
            //authetication routes
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<OtpForm />} path="/otpform" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Landing />} path="/landing" />


          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
