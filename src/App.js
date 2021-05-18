import './css/App.css';
import React from 'react';
import Header from './pages/header';
import StaticGallery from './pages/staticGallery';
function App() {
  return (
    <div className="App">
        <Header/>
        <StaticGallery/>
        <br/>
        <footer>@Abraham L. Infante</footer>
        <br/>
    </div>
  );
}

export default App;
