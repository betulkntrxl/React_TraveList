import { useState } from "react";
import Edit from "./Edit";

function Showlist({ item, update, edited }) {
  const [edit, setedit] = useState(false);
  const handleclick = () => {
    update(item.id);
  };

  const handleEdit = () => {
    setedit(!edit);
  };

  const handlefalse = () => {
    setedit(false);
  };

  let content;
  if (edit) {
    // If in edit mode, show the Edit component
    content = <Edit handfalse={handlefalse} edited={edited} item={item} />;
  } else {
    // If not in edit mode, show the item normally
    content = <div> {item.title} </div>; // Assuming 'item' has a 'title' property
  }
  return (
    <div className="items">
      <div>
        <button className="btn" onClick={handleclick}>
          X
        </button>
        <button className="btn" onClick={handleEdit}>
          {" "}
          -{" "}
        </button>
      </div>
      <div className="content">{content} </div>
    </div>
  );
}

export default Showlist;
