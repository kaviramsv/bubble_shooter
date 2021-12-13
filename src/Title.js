import { useEffect } from "react";

const Title = ()=>{

  useEffect(()=>{
    document.title = "kaar";
  })
  return (
    <article>
      <h2>tHE TITLE COMPONENT</h2>
    </article>
  )
}

export default Title;