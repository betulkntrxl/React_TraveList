import Showlist from "./Showlist";

function List({ items, update, edited }) {
  const list = items.map((item) => {
    return (
      <Showlist edited={edited} key={item.id} item={item} update={update} />
    );
  });

  return <div className="div2">{list}</div>;
}

export default List;
