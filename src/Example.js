import React, { useState, useEffect } from "react";
import useTitleButton from "./hooks/useTitleButton";
// https://stackoverflow.com/questions/57003084/when-to-use-useeffect

function Example() {
 const {click,count,setCount,handleButtonClick}=useTitleButton();

  return (
    <div>
      <p>You clicked {click} times</p>
      <button onClick={()=>{setCount(count - .3);}}>Button 2</button>
      <button onClick={handleButtonClick}>Button 2</button>
    </div>
  );
}
export default Example;