import "./App.css";
import Card from "./Card.js";
import InputComponent from "./InputComponent.js";
import RegisterForm from "./RegisterForm.js";
import TextInputWithFocusButton from "./TextInputWithFocusButton.js";


function App() {
  return (
    <div>

      <Card h2="First card's h2" h3="First card's h3"/>
      <InputComponent/>
      <RegisterForm/>
      <TextInputWithFocusButton/>
    </div>
  );
}

export default App;