import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import Palmtree from "./images/palmtree.png";

function App() {
  const [items, setitems] = useState([]);
  const additem = (item) => {
    setitems([...items, { id: Math.round(Math.random() * 999), title: item }]);
  };

  const update = (idtodelete) => {
    const newarr = items.filter((i) => {
      return i.id !== idtodelete;
    });
    setitems(newarr);
  };

  const edit = (id, newTitle) => {
    const edited = items.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setitems(edited);
  };
  return (
    <div className="container">
      <div className="header">
        <img src={Palmtree} alt="palm tree" className="images" />
        <h1 className="welcome"> Welcome To Your Travel List</h1>
        <img src={Palmtree} alt="palm tree" className="images" />
      </div>
      <div className="paragraph">
        <p className="par">
          <u>
            {" "}
            Add,delete and modify what you want to bring on your holidays!{" "}
          </u>
        </p>
      </div>
      <div className="search ">
        <Search additem={additem} />
      </div>

      <List items={items} update={update} edited={edit} />
    </div>
  );
}

export default App;
