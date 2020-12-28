import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Demo from './demoComponent/Demo';//by defalt with out extension is considered js file
//import Demo2 from './demoComponent/Demo2';
// import Avatar from './avatarComponent/Avatar';
import Avatar2 from './avatarComponent/Avatar2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Demo name="Rk"/> */}
    {/* <Demo2 name="Rk2" /> */}    
      {/* <Avatar /> */}
      <Avatar2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
