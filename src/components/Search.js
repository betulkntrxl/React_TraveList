import { useState } from "react";
import "./com.css";

function Search({ additem }) {
  const [value, setvalue] = useState("");

  const handlechange = (event) => {
    setvalue(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    additem(value);
  };

  return (
    <form onSubmit={handlesubmit}>
      <label className="par2">Enter item: </label>
      <input className="bar" value={value} onChange={handlechange} />
      <div className="button">
        <button className="butn"> add item</button>
      </div>
    </form>
  );
}

export default Search;
