import React, { useState, useEffect } from "react";

const texts = [
  "“Where Tradition Meets Timeless Art.”",
  "“Rooted in Nature, Crafted with Culture.”",
  "“Every Stroke Tells a Story.”"
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 1000); // 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-md text-white text-bold transition-opacity duration-500">
      {texts[index]}
    </h1>
  );
};

export default Typewriter;