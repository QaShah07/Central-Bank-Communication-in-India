// src/App.tsx

// import Nav from './components/Nav';
// import Hero from './components/Hero';
// import InteractiveTools from './components/InteractiveTools';
// import LatestUpdates from './components/LatestUpdates';
// import Footer from './components/Footer';
// import './styles/Home.css';

import React from "react";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header />
      <Navbar /> */}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
