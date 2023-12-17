import './App.css';
import {useState} from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const PasswordErrorMessage = () => { 
  return ( 
    <p className="FieldError">Password should have at least 8 characters</p> 
  ); 
 }; 

 const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function App() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState({
    value:"",
    isTouched:false,
  });
  const [role,setRole]=useState("");
  const { theme } = useTheme();

const getIsFormValid=()=>{
  return (firstName && validateEmail(email) && password.value.length>=8 && role!=="role");
};

const clearForm=()=>{
  setFirstName("");
  setLastName("");
  setEmail("");
  setRole("");
  setPassword({
    value:"",
    isTouched:false,
  })
}
const handleSubmit=(e)=>{
  e.preventDefault();
  alert("Account Created!");
  clearForm();
}

  return (
    <div className="App" style={{
      backgroundColor: theme === "light" ? "white" : "black",
    }}>
      
      <form onSubmit={handleSubmit}>
        <fieldset>
        <div className="Field">
        <Switch /> 
        </div>
          <h2 style={{color: theme === "light" ? "black" : "white"}}>Sign Up</h2>
          <div className="Field">
          <label style={{color: theme === "light" ? "black" : "white"}}>First Name<sup>*</sup></label>
          <input 
          value={firstName}
          onChange={(e)=>{
            setFirstName(e.target.value);
          }}
            placeholder="First Name"/>
          </div>
          
          <div className="Field">
          <label style={{color: theme === "light" ? "black" : "white"}}>Last Name</label>
          <input 
          value={lastName}
          onChange={(e)=>{
            setLastName(e.target.value);
          }}
          placeholder="Last Name"/>
          </div>
          
          <div className="Field">
          <label style={{color: theme === "light" ? "black" : "white"}}>Email Address<sup>*</sup></label>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          placeholder="Email Address"/>
          </div>
          
          <div className="Field">
          <label style={{color: theme === "light" ? "black" : "white"}}>Password<sup>*</sup></label>
          <input 
          type="password"
          onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
          placeholder="Password"/>
          {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null}
          </div>
          
          <div className="Field">
          <label style={{color: theme === "light" ? "black" : "white"}}>Role<sup>*</sup></label>
          <select value={role} onChange={(e)=>setRole(e.target.value)}>
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
          </div>  
          <button type="submit" disabled={!getIsFormValid()}>Create Account</button>     
          
        </fieldset>
      </form>
      
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
