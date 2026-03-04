import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Pastikan baris ini ada agar gaya Tailwind CSS Anda termuat

// Kode di bawah ini mencari elemen <div id="root"> di dalam file index.html
// lalu "menyuntikkan" seluruh komponen App kita ke dalamnya.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
