import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardComp from "../../component/cards/CardComp";

export default function Home() {
  // hook ======================================
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // api call ================================
  const fetchData = async () => {
    const res = await axios.get(" https://api.tvmaze.com/search/shows?q=all");
    setData(res.data);
  };
  return (
    <div className="movieContainer">
      {data.map((item, id) => (
        <CardComp key={id} movie={item} />
      ))}
    </div>
  );
}
