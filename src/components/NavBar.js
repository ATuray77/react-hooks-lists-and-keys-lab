import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linksItems = links.map((linkObj) => {
  //   return <a key = {linkObj} {`#${linkObj}`}></a>
  // })
  
  // return (
    
  //   return <nam>{linksItems}</nam>
 
  // )
  return (
   <nav>
     <a href="#home">home</a>
     <a href="#about">about</a>
     <a href="#projects">projects</a>
   </nav>
  ) 
}







export default NavBar;
