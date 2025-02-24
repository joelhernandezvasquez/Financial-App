'use client';
import { useState } from "react";

const UseToggle = () => {
  const [isToggle,setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!isToggle)
  }

  return {
    isToggle,
    handleToggle
  }
}

export default UseToggle