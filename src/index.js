import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/authContext';
import { NoteProvider } from './context/notesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <NoteProvider>

        <App />
      </NoteProvider>
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
