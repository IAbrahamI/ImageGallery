import './css/App.css';
import React from 'react';
import Header from './pages/header';
import StaticGallery from './pages/staticGallery';
function App() {
  return (
    <div className="App">
        <Header/>
        <StaticGallery/>
    </div>
  );
}

export default App;
