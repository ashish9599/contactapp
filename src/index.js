import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './component/App';
import { ContactProvider } from './Provider/contactProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
 <ContactProvider>

  <App />
 </ContactProvider>
<ToastContainer/>
  </React.StrictMode>
);
