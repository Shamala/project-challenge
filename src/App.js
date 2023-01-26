import React from "react";
import ResultWindow from "./ResultWindow";
import ColorInput from "./ColorInput";
import { useState } from "react";
const App = () => {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="app">
      <ResultWindow color={color} hexValue={hexValue} isDarkText={isDarkText} />
      <ColorInput
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
};

export default App;
