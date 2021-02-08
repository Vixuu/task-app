import React from "react";
import Button from "./Button";

const Header = (p) => {
  
  const onClick = () => {
    console.log("CLICK");
  };

  return (
    <header className="header">
      <h1>{p.title} </h1>
      <Button color={p.showAddTask ? "darkred" : "green"} text={p.showAddTask ? "Close" : "Add"} onClick={onClick} toggleShow={p.toggleShow}/>
    </header>
  );
};

Header.defaultProps = {
  title: "To-Do ",
};

export default Header;
