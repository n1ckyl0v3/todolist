import style from "./toDoList.module.css";
import { useState } from "react";

const Input = () => {
  return (
    <div className={style.input}>
      <input type="text" className={style.text} />
    </div>
  );
};

export default Input;
