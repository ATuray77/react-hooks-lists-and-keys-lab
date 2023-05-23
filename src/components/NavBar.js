import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mylinks = links.map((eachLink) => {
    return <a key={eachLink} href={"#" + eachLink}>{eachLink}</a>
  })
  return (
    <nav>
      {mylinks}
    </nav>
  )
  
  
  // return (
  //  <nav>
  //    <a href="#home">home</a>
  //    <a href="#about">about</a>
  //    <a href="#projects">projects</a>
  //  </nav>
  // ) 
}







export default NavBar;
