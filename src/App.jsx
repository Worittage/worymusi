import './App.css';
import React from 'react';
import Bar from './components/barComponents/Bar';
import Main from './components/mainComponent/Main';

function App() {
  return (
    <div>
        <div className="wrapper">
          <div className="container">
            <Main></Main>
            <Bar></Bar>
            <footer className="footer"></footer>
          </div>
        </div>
      </div>
  );
}

export default App;
