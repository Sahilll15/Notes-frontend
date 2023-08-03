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

function App() {
  return (
    <>

      <Router>

        <ToastContainer />
        <Navbar />
        <div className='mt-16  overflow-hidden'>
          <Routes>
            <Route element={<PrivateRoutes />}>
             
            </Route>
            <Route element={<Home />} path="/" />
              <Route element={<NotesTable />} path="/notestable" />

              <Route element={<Nviewer />} path="/nviewer" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<NotesForm />} path="/addnotes" />
            <Route element={<OtpForm />} path="/otpForm" />
            <Route element={<Profile />} path="/profile" />

          </Routes>



        </div>

      </Router>

    </>
  );
}

export default App;
