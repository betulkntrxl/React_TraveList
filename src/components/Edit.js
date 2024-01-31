import { useState } from "react";
import "./com.css";

function Edit({ edited, item, handfalse }) {
  const [newitem, setnewitem] = useState(item.title);

  const handleNewItem = (event) => {
    setnewitem(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    edited(item.id, newitem);
    handfalse();
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label> enter new item: </label>
        <input
          className="update"
          value={newitem}
          onChange={handleNewItem}
        ></input>
        <button className="btn"> update</button>
      </form>
    </div>
  );
}

export default Edit;
