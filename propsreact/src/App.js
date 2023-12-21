import "./App.css";
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import Card from "./Card.js";
import InputComponent from "./InputComponent.js";
import RegisterForm from "./RegisterForm.js";
import TextInputWithFocusButton from "./TextInputWithFocusButton.js";
import DessertsList from "./DessertsList";
import { useState, useEffect, useRef } from "react";
import { RadioGroup, RadioOption } from "./Radio.js";
import FeedbackForm from "./FeedbackForm";


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
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
        return {
          ...prevState,
          text: "Your coupon has been used.",
          valid: false,
          instructions: "Please visit our restaurant to renew your gift card.",
        }
    });
  }

  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }

  function usePrevious(val) {
    const ref = useRef();
    useEffect(() => {
      ref.current = val;
    },[val]);
    return ref.current;
  }

  const [selected, setSelected] = useState("");
  

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
      <div>
    <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {Object.keys(user).length>0?user.results[0].name.first:null}</h2>
      <img src={Object.keys(user).length>0?user.results[0].picture.large:null} alt="" />
    </div>

    <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
      <FeedbackForm/>
    
    </div>
  );
}

export default App;