import { useEffect, useState } from "react";
import axios from "axios";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => setPhones(data.data.data));
    //   because axios add extra informatioon add whole thing in data object on their own
  }, []);
  return (
    <div>
      <h2 className="text-5xl">Phone: {phones.length}</h2>
    </div>
  );
};

export default Phones;
