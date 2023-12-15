import "./App.css";
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import Card from "./Card.js";
import InputComponent from "./InputComponent.js";
import RegisterForm from "./RegisterForm.js";
import TextInputWithFocusButton from "./TextInputWithFocusButton.js";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

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
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;