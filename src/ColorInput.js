import colorNames from "colornames";

const ColorInput = ({
  color,
  setColor,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name</label>
      <input
        autoFocus
        type="text"
        className="colorInput"
        placeholder="Add color name"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default ColorInput;
