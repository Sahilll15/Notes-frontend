import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './utils/PrivateRoutes';


function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>


      </Router>

    </>
  );
}

export default App;
