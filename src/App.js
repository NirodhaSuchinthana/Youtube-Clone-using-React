import React from 'react';
import Header from "./Components/Header"
import './App.css';
import Sidebar from './Components/Sidebar';
import RecommendedVideos from './Components/RecommendedVideos';

function App() {
  return (
    <div className="app">
      {/* Empty class */}
      {/* <h1>Youtube clone application-learning react from begining</h1> */}

      <Header/>
      
      <div className="app_page">
        <Sidebar />

        <RecommendedVideos />
      </div>
      {/* Header */}
      {/* Sidebar */}
      {/* Recommended Videos */}
    </div>
  );
}

export default App;
