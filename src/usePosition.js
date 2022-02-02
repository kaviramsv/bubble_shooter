import { useEffect, useState } from "react";

function usePosition(start) {
  const [position, setPosition] = useState({ x: 500, y: 500 });
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState({ x: 200, y:200 });
  const [redtarget, setRedTarget] = useState({ x: 500, y: 500 });
  const [win, setWin] = useState("  ");
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    // const randomIntFromInterval = (min, max) => { // min and max included 
    //   return Math.floor(Math.random() * (max - min + 1) + min)
    // }
    if(!start){
      return
    }
    const handleMousemove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })

      const handleMouseclick1 = (event) => {
   
        if (((position.x >= target.x) && (position.x < (target.x + 100))) && ((position.y >= target.y) && (position.y < (target.y + 100)))) {
          setWin("you gain one point");
          // console.log("gain 1point");
          setScore(score + 1);           
        }   
       
        if (((position.x >= redtarget.x) && (position.x < (redtarget.x + 100))) && ((position.y >= redtarget.y) && (position.y < (redtarget.y + 100)))) {
          console.log("loose 1point");
          setWin("you loose one point ");
          setScore(score - 1);
        }        
      
        
      }
      document.addEventListener("click", handleMouseclick1);//

    }
    document.addEventListener("mousemove", handleMousemove);//Mouse move===========

    return () => {
      document.removeEventListener("mousemove", handleMousemove);   

      setWin("  ");
    }

  }, [position,start]);


useEffect(()=>{
  if(!start){
    return
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const interval = setInterval(() => {
      let new_x = randomIntFromInterval(1, 1200);
      let new_y = randomIntFromInterval(200, 700);
      setTarget({ x: new_x, y: new_y });
    }, 1500);
    const red_interval = setInterval(() => {
      let new_x = randomIntFromInterval(1, 1200);
      let new_y = randomIntFromInterval(200, 700);
      setRedTarget({ x: new_x, y: new_y });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(red_interval);
      // clearInterval(time_interval)
    }
  },[start])

useEffect(()=>{
  if(!start){
    return
  }
  if(counter===0){
    return
  }
  const time_interval = setInterval(() => {
      setCounter(counter - 1);
    }, 500); 

  return () => {
    
   clearInterval(time_interval)
  }
},[counter,start])

  return { position, score, target, win, redtarget, counter };
}

export default usePosition;