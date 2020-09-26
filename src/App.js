import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Container from './Container';
import Services from './Services';
import PopularServices from './PopularServices';


function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />

      {/* navbar */}
      <Navbar/>
      {/* container */}
      <Container />
      {/* sidemenu */}
      {/* carousel */}
      {/* popular service */}
      <PopularServices />
      {/* card */}
      
      <Services />
    </div>
  );
}

export default App;
