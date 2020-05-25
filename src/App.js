import React from 'react';
import './App.css';
import Index from './pages/Index';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className="App" style={{width: '100vw', backgroundColor: 'black'}}>
        <Header/>
        <Index/>
    </div>
  );
}

export default App;
