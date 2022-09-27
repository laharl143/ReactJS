import ToDo from './components/ToDo';    //its always essential to use import for every file

function App() {
  return (
  <div>
    <h1>My Todos</h1>   
    <ToDo text='Learn React' />         {/*this is used to import the code in ToDo.js file here*/}
    <ToDo text='Master React' /> 
    <ToDo text='Explore the full React course' />
  </div>
  );
}

export default App;
   
