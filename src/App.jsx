import { useState } from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggle() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} logo={reactLogo} toggle={toggle} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
