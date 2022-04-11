import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <button
        style={
          !disabled
            ? { backgroundColor: buttonColor }
            : { backgroundColor: "gray" }
        }
        disabled={disabled}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        id="enable-button-checkbox"
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
