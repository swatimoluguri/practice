import "./App.css";
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import Card from "./Card.js";
import InputComponent from "./InputComponent.js";
import RegisterForm from "./RegisterForm.js";
import TextInputWithFocusButton from "./TextInputWithFocusButton.js";


function App() {
  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <div>
      <div className="App">
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>
      <Card h2="First card's h2" h3="First card's h3" />
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;