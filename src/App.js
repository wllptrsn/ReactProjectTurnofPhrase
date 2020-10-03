import React from 'react';
//import logo from './logo.svg';
import Main from'./components/MainComponent.js'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
