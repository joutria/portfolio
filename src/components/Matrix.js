import { useEffect, useState } from "react";

function Matrix() {
  // state for the movement
  const [topMargin, setTopMargin] = useState(-25);
  const [drop, setDrop] = useState(getRain());
  // variable to modify the margin state

  function getRandChar() {
    let x = Math.random().toString(36)[2];
    return x;
  }

  function getRain() {
    const len = Math.floor(Math.random()* 25) + 10;
    let x = new Array(len).fill().map((_) => getRandChar());
    return x;
  }

  function interval(counter) {
    setInterval(() => {
      if (counter > 30) {
        counter = -drop.length*1.5;
      } else {
        counter += 1;
        setDrop(mutateDrop);
      }
      setTopMargin(() => {
        const newValue = counter;
        return newValue;
      });
    }, 150);
  }

  useEffect(() => {
    let counter = -25;
    interval(counter);
    return () => {
      clearInterval(interval());
    };
  }, []);

  //funciton that changes a random value in the array of characters
  function mutateDrop(drop) {
    const newValue = [];
    for (let i = 1; i < drop.length; i++) {
      if (Math.random() > 0.05) {
        newValue.push(getRandChar());
      } else {
        newValue.push(drop[i]);
      }
    }
    newValue.push(getRandChar());
    return newValue;
  }

  // this will create a column with the matrix effect included
  function createCol() {
    return drop.map((char, index) => (
      <span
        key={index}
        style={{
          color: index === drop.length - 1 ? "#fff" : undefined,
          opacity: +index * 0.05,
        }}
      >
        {char}
      </span>
    ));
  }

  return (
    <div className="Matrix">
      <div
        className="matrixCol"
        style={{
          marginTop: `${topMargin}em`,
        }}
      >
        {createCol()}
      </div>
    </div>
  );
}

export default Matrix;
