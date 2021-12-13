import { useEffect, useState } from "react";

function usePosition() {
  const [position, setPosition] = useState({ x: 500, y: 500 });
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [redtarget, setRedTarget] = useState({ x: 100, y: 100 });
  const [win, setWin] = useState("  ");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const randomIntFromInterval = (min, max) => { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleMousemove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }
    document.addEventListener("mousemove", handleMousemove);

    const interval = setInterval(() => {
      let new_x = randomIntFromInterval(0,1200);
      let new_y = randomIntFromInterval(0, 700); 
      setTarget({ x: new_x, y: new_y });
    }, 1500);
    const red_interval = setInterval(() => {
      let new_x = randomIntFromInterval(0, 1200);
      let new_y = randomIntFromInterval(0, 700); 
      setRedTarget({ x: new_x, y: new_y });
    }, 1000);
    const time_interval = setInterval(() => {
   
      setCounter(counter+1);
    }, 500);

    if (((position.x>=target.x)&&(position.x<(target.x+100)))&&((position.y>=target.y)&&(position.y<(target.y+100)))) {
      setWin("you gain one point");
      const handleMouseclick = (event) => {     
        setScore(score+1);
      }
      document.addEventListener("click",handleMouseclick )
    }
    if (((position.x>=redtarget.x)&&(position.x<(redtarget.x+100)))&&((position.y>=redtarget.y)&&(position.y<(redtarget.y+100)))) {
      console.log("1point");
      setWin("you loose one point ");
      const handleMouseclick = (event) => {     
        setScore(score-1);
      }
      document.addEventListener("click",handleMouseclick )
    }
    return () => {
      document.removeEventListener("mousemove", handleMousemove);
      clearInterval(interval);
      clearInterval(red_interval);
      clearInterval(time_interval);
      setWin("  ");
    
    }

  }, [position])
  return { position, score, target, win ,redtarget,counter};
}

export default usePosition;