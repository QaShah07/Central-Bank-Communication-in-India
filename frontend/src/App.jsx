// src/App.jsx

import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes'  // <-- your routes file

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App
