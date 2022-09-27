import ToDo from './components/ToDo';    

function App() {
  return (
  <div>
    <h1>My Todos</h1>   
    <ToDo />         {/*this is used to import the code in ToDo.js file here*/}
    <ToDo /> 
    <ToDo /> 
  </div>
  );
}

export default App;
   
