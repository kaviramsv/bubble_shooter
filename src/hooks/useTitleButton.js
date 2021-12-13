import { useState,useEffect } from "react";

function useTitleButton(){

  const [count, setCount] = useState(0);
  const [click, setclick] = useState(0);
  // useEffect(() => {
useEffect(() => {
  console.log(`You rendered ${count} times`);
 document.body.style.backgroundColor = `rgba(255, 0, 0, ${count})`;
  }, [count]);

const handleButtonClick = () => {
  setclick(click+1);
  setCount(count + .3);
  console.log(`You clicked ${count + .3} times`);
};
return {click,count,setCount,handleButtonClick}
}

export default useTitleButton;