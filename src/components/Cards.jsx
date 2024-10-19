import React from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        img: "https://media.vogue.co.uk/photos/6605a25171565a9b3ac68d48/2:3/w_2560%2Cc_limit/GettyImages-2076716982.jpg",
        stat: "",
      },
      {
        id: 1,
        img: "https://media.vogue.co.uk/photos/6605a25171565a9b3ac68d48/2:3/w_2560%2Cc_limit/GettyImages-2076716982.jpg",
        stat: "",
      },
      {
        id: 2,
        img: "https://media.ladylike.gr/ldl-images/ana-de-armas-3.jpg",
        stat: "",
      },
      {
        id: 2,
        img: "https://media.ladylike.gr/ldl-images/ana-de-armas-3.jpg",
        stat: "",
      },
      {
        id: 3,
        img: "https://ca-times.brightspotcdn.com/dims4/default/c6674df/2147483647/strip/true/crop/3500x2339+0+0/resize/1200x802!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fab%2F8d%2F29bf0c8c439fbb413f62fc335e26%2F2021-nyff-the-lost-daughter-screening-94324.jpg",
        stat: "",
      },
      {
        id: 3,
        img: "https://ca-times.brightspotcdn.com/dims4/default/c6674df/2147483647/strip/true/crop/3500x2339+0+0/resize/1200x802!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fab%2F8d%2F29bf0c8c439fbb413f62fc335e26%2F2021-nyff-the-lost-daughter-screening-94324.jpg",
        stat: "",
      },
      {
        id: 4,
        img: "https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg",
        stat: "",
      },
      {
        id: 4,
        img: "https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg",
        stat: "",
      },
      {
        id: 5,
        img: "https://m.media-amazon.com/images/M/MV5BMzRiNDhiMDQtYWZkMS00ZjU5LTg5NzUtOTc4NzE2Yzc0ZWUwXkEyXkFqcGc@._V1_.jpg",
        stat: "",
      },
      {
        id: 5,
        img: "https://m.media-amazon.com/images/M/MV5BMzRiNDhiMDQtYWZkMS00ZjU5LTg5NzUtOTc4NzE2Yzc0ZWUwXkEyXkFqcGc@._V1_.jpg",
        stat: "",
      },
      {
        id: 6,
        img: "https://cdn.britannica.com/47/201647-050-C547C128/Hugh-Jackman-2013.jpg",
        stat: "",
      },
      {
        id: 6,
        img: "https://cdn.britannica.com/47/201647-050-C547C128/Hugh-Jackman-2013.jpg",
        stat: "",
      },
      {
        id: 7,
        img: "https://www.festival-deauville.com/wp-content/uploads/2023/08/emilia-clarke-robert-ascroft.jpg",
        stat: "",
      },
      {
        id: 7,
        img: "https://www.festival-deauville.com/wp-content/uploads/2023/08/emilia-clarke-robert-ascroft.jpg",
        stat: "",
      },
      {
        id: 8,
        img: "https://cdn.britannica.com/70/231870-050-299010C8/Jason-Momoa-2021.jpg",
        stat: "",
      },
      {
        id: 8,
        img: "https://cdn.britannica.com/70/231870-050-299010C8/Jason-Momoa-2021.jpg",
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const check = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
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
  };

  const handleClick = (id) => {
    // if (
    //   id === prev ||
    //   items[id].stat === "correct" ||
    //   items[id].stat === "active"
    // ) {
    //   return;
    // }
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
