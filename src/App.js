import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Nviewer from './pages/nviewer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './utils/PrivateRoutes';
import NotesForm from './pages/NotesForm';
import NotesTable from './pages/NotesTable';
import OtpForm from './pages/OtpForm';
import Navbar from './components/Navbar';
import Profile from './pages/profile';
//AuthProvider
import { AuthProvider, useAuth } from './context/authContext';


function App() {



  return (
    <>

      <AuthProvider >
        <Router>

          <ToastContainer />
          <Navbar />
          <div className='mt-16  overflow-hidden'>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Home />} path="/" />
                <Route element={<NotesTable />} path="/notestable" />
                <Route element={<Profile />} path="/profile" />
                <Route element={<Nviewer />} path="/nviewer" />
                <Route element={<NotesForm />} path="/addnotes" />
                <Route element={<OtpForm />} path="/otpForm" />
              </Route>
              <Route element={<Login />} path="/login" />
              <Route element={<Register />} path="/register" />
            </Routes>



          </div>

        </Router>

      </AuthProvider>
    </>
  );
}

export default App;
