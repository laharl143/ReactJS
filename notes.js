console.log("Hello, World");

/* 
//////////////////////////////////////////
#How to create a react project:

git bash in the folder you want to create a react app

in command line: 

step 1: 
$npx create-react-app *folder name*  //then the *folder name* will be created

step 2:
$npm start    //new tab will open in your browser "http://localhost:3000/" with the rotating react logo

//////////////////////////////////////////
#Diving into the Created Project
Optional: in the src folder, delete <App.css, App.test.js, logo.svg, reportWebVitals.js, setupTests.js

You will be left with 3 files in src folder: format it this way for a start from scratch:

App.js:
function App() {
  return <div>Hello! World!</div>
}

export default App;

index.css:
*empty*

index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



*/