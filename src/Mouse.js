import React from "react";
import usePosition from "./usePosition";
import { useState } from "react";
const Mouse = () => {

  const { position, score, target, win, redtarget,counter} = usePosition();
  const style = {
    
    position: "absolute",
    left: position.x,
    top: position.y,
    width: "40px",
    height: "40px",
    backgroundImage:"url('https://cdn-0.emojis.wiki/emoji-pics/facebook/backhand-index-pointing-up-facebook.png')",
    backgroundSize: "cover",
  }
  const style_blue = {
    backgroundColor: "blue",
    position: "absolute",
    left: target.x,
    top: target.y,
    width: "100px",
    height: "100px",
    borderRadius:"45%",
    backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocpKsQyiJ9c1hd4L5m1WXOcKAxY0mA9_RzQ&usqp=CAU')",
    backgroundSize: "cover",
  }
  const style_red = {
    backgroundColor: "red",
    position: "absolute",
    left: redtarget.x,
    top: redtarget.y,
    width: "100px",
    height: "100px",
    borderRadius:"45%",

  }
 const top= {
   display:"flex",
   flexDirection:"row"

 }
 const right= {
   marginLeft:"100px",
 }
  return (
    <div style={top}>
     
      <div style={{ backgroundColor: "grey", height: "800px", width: "1300px" }} />
      <div style={right}>
        <h1>Grab the coin!!</h1>
        <h1>Score : {score}</h1>
        <h3> {win} </h3>
        {/* <p>target(x,y)  :{target.x},{target.y}</p>
        <p>redtarget(x,y)  :{redtarget.x},{redtarget.y}</p>
        <p>player(x,y) :{position.x},{position.y}</p>
         */}
        <h3> {counter} </h3>
        <div style={style_blue}></div>
         <div style={style_red}><h1>-1</h1></div> 
        <div style={style}></div>
        <p></p>
        
      </div>
     
    </div>
  )
}

export default Mouse;