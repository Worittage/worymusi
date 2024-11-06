import './App.css';
import React from 'react';
import Nav from './components/mainComponent/navComponent/Nav';
import Sidebar from './components/mainComponent/sidebarComponent/Sidebar';
import Centerblock from './components/mainComponent/centerblockComponent/Centerblock';
import Bar from './components/barComponents/Bar';

function App() {
  return (
    <div>
        <div className="wrapper">
          <div className="container">
            <main className="main">
              <Nav></Nav>
              <Centerblock></Centerblock>
             <Sidebar></Sidebar>
            </main>
            <Bar></Bar>
            <footer className="footer"></footer>
          </div>
        </div>
      </div>
  );
}

export default App;
