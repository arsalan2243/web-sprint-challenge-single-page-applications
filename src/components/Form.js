import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    size: "",
    sauce: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    instruction: "",
  });
  const [error, setError] = useState({
    size: "",
    sauce: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    instruction: "",
  });
  const [disable, setDisable] = useState(true);
  const handleChange = (event) => {
    const { value, name, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <h1>Build your Own pizza</h1>
      <form>
        {/* select size */}
        <label htmlFor="dropdown">choose your size</label>
        <select
          onChange={handleChange}
          value={data.size}
          id="dropdown"
          name="size"
        >
          <option>choose your size</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        {/* sauce radio boxes */}
        <br />
        red sauce
        <input
          onChange={handleChange}
          value={data.sauce}
          type="radio"
          name="sauce"
        />
        <br />
        garlic sauce
        <input
          onChange={handleChange}
          value={data.sauce}
          type="radio"
          name="sauce"
        />
        <br />
        BBQ sauce
        <input
          onChange={handleChange}
          value={data.sauce}
          type="radio"
          name="sauce"
        />
        <br />
        ALferedo sauce
        <input
          onChange={handleChange}
          value={data.sauce}
          type="radio"
          name="sauce"
        />
        {/* {check box} */}
        <p>add your topping</p>
        <br />
        ham
        <input
          onChange={handleChange}
          value={data.topping1}
          checked={data.topping1}
          type="checkbox"
          name="topping1"
        />
        <br />
        baken
        <input
          onChange={handleChange}
          value={data.topping2}
          type="checkbox"
          name="topping2"
          checked={data.topping2}
        />
        <br />
        onion
        <input
          checked={data.topping3}
          onChange={handleChange}
          value={data.topping3}
          type="checkbox"
          name="topping3"
        />
        <br />
        pepper
        <input
          checked={data.topping4}
          onChange={handleChange}
          value={data.topping4}
          type="checkbox"
          name="topping4"
        />
        <br />
        {/* {special insturction} */}
        <label htmlFor="instruction">special instructions</label>
        <input
          onChange={handleChange}
          value={data.instruction}
          type="text"
          placeholder="any further instructions"
          name="instruction"
          id="instruction"
        />
        <button type="submit" disabled={disable}>
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Form;
