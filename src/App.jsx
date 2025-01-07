import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    const parsedValue = +newValue;

    if (parsedValue < 0) {
      setErrorMessage("Value must be positive");
      return;
    } else {
      setErrorMessage(""); 
    }

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: parsedValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {errorMessage && <p className="center">{errorMessage}</p>}
      {inputIsValid && !errorMessage && <Results input={userInput} />}
      {!inputIsValid && <p className="center">Please Enter a Duration Greater than Zero</p>}
    </>
  );
}

export default App;
