import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';  // Import Toaster
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <Toaster /> {/* Add Toaster here */}
    </StrictMode>
  </BrowserRouter>
);
