// import logo from './logo.svg';
import React from 'react';
import './App.scss';
import Header from './header';
import Main from './main';

const Footer = () => {
  return (
    <footer>
      &copy; 2018 Code fellows
    </footer>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header" >
//         <h1>RESTy</h1>
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
//       </header>
//       <label htmlFor="">URL : </label>
//       <input type="text" />
//       <button>GO!</button>
//     </div>

//   );
// }
function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header className="App-header"/>
      <Main />
      <Footer />
     </div> 
    </React.Fragment>
    
  );
}

export default App;
