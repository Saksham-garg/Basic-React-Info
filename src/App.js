import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';

function App() {
  const [darkmode,setdarkmode] = React.useState(true);

  function toggleDarkMode(){
    setdarkmode(prevState => !prevState);
  }
  return (
    <div className="App">
      <Navbar mode={darkmode} toggle={toggleDarkMode}></Navbar>
      <Main mode={darkmode}></Main>
    </div>
  );
}

export default App;
