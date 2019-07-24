import React from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer'
import PizzaListDetailsContainer from './components/PizzaDetailsContainer'
import AddPizzaFormContainer from './components/AddPizzaFormContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <PizzaListContainer />
        <PizzaListDetailsContainer />
        <AddPizzaFormContainer />
       
      </header>
    </div>
  );
}

export default App;
