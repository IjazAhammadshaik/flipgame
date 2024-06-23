
import { useState } from "react";
import Card from "./Card";

function Cards() {
  const initialItems = [
    { id: 1, img: "/img/emoji1.jpg", stat: "" },
    { id: 1, img: "/img/emoji1.jpg", stat: "" },
    { id: 2, img: "/img/emoji2.jpg", stat: "" },
    { id: 2, img: "/img/emoji2.jpg", stat: "" },
    { id: 3, img: "/img/emoji3.jpg", stat: "" },
    { id: 3, img: "/img/emoji3.jpg", stat: "" },
    { id: 4, img: "/img/emoji4.jpg", stat: "" },
    { id: 4, img: "/img/emoji4.jpg", stat: "" },
    { id: 5, img: "/img/emoji5.jpg", stat: "" },
    { id: 5, img: "/img/emoji5.jpg", stat: "" },
    { id: 6, img: "/img/emoji6.jpg", stat: "" },
    { id: 6, img: "/img/emoji6.jpg", stat: "" },
    { id: 7, img: "/img/emoji7.jpg", stat: "" },
    { id: 7, img: "/img/emoji7.jpg", stat: "" },
    { id: 8, img: "/img/emoji8.jpg", stat: "" },
    { id: 8, img: "/img/emoji8.jpg", stat: "" },
    
  ];

  const [items, setItems] = useState(
    initialItems.sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);
  const [score, setScore] = useState(0);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setScore(score + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  function resetGame() {
    setItems(initialItems.sort(() => Math.random() - 0.5));
    setPrev(-1);
    setScore(0);
  }

  return (
    <>
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
        <div className="score">Score: {score}</div>
      </div>
    </>
  );
}

export default Cards;

