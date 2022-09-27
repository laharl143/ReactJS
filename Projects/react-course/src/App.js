import Backdrop from './components/BackDrop';    //its always essential to use import for every file
import Modal from './components/Modal';
import ToDo from './components/ToDo';    

function App() {
  return (
  <div>
    <h1>My Todos</h1>   
    <ToDo text='Learn React' />         {/*this is used to import the code in ToDo.js file here*/}
    <ToDo text='Master React' /> 
    <ToDo text='Explore the full React course' /> 
    <Modal />                           {/*this is used to import the code in Modal.js file here*/}
    <Backdrop />                        {/*this is used to import the code in Backdrop.js file here*/}
  </div>
  );
}

export default App;
   
