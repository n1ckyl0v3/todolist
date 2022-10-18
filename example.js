import { useState, useEffect } from "react";
import React from "react";
import style from "./example.module.css";

const ToDoList = () => {
  const menu = ["All", "Active", "Completed"];
  const [value, setValue] = useState("");
  const [jobs, setJobs] = useState(
    () => JSON.parse(localStorage.getItem("jobs")) || []
  );

  const [type, setType] = useState("All");
  const [itemsLeft, setItemsLeft] = useState(0);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    setItemsLeft(jobs.length);
    const lengthCheckbox = checked.length;
    // console.log(jobs.length - lengthCheckbox);
    setItemsLeft(jobs.length - lengthCheckbox);
  });

  const addJob = () => {
    // console.log(value);
    setJobs((prev) => {
      const newJobs = [...prev, value];
      return newJobs;
    });

    setValue("");
  };

  const remove = (props) => {
    // console.log(removeJob);
    const removeJob = jobs.filter((item, index) => index !== props);
    setJobs(removeJob);
  };

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const checkbox = (check) => {
    const isChecked = checked.includes(check);
    setChecked((ckd) => {
      if (isChecked) {
        const checkedd = checked.filter((item) => item !== check);
        return checkedd;
      } else {
        return [...ckd, check];
      }
    });
  };
  // console.log(checked);
  const buttonMenu = (props) => {
    setType(props);
  };

  return (
    <div className={style.App}>
      <div className={style.container}>
        <h1 className={style.title}>To Do List</h1>
        <div className={style.container}>
          <input
            value={value}
            type="text"
            className={style.input}
            placeholder="To do"
            onChange={changeValue}
          />
        </div>
        <div className={style.container1}>
          <button onClick={addJob} className={style.add}>
            ADD
          </button>
        </div>
        <div className={style.contentContainer}>
          <ul className={style.ul}>
            {jobs.map((job, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={style.display}>
                    <div className={style.inputCheck}>
                      <input
                        type="checkbox"
                        checked={checked.includes(index)}
                        className={style.checkbox}
                        onChange={() => {
                          checkbox(index);
                        }}
                      />
                      <li className={style.li}>{job}</li>
                    </div>
                    <button
                      className={style.remove}
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </React.Fragment>
              );
            })}
          </ul>
          <div className={style.active}>
            <p className={style.itemsLeft}>{itemsLeft} items left</p>
            <div className={style.menu}>
              {menu.map((item, index) => {
                return (
                  <button
                    style={
                      type === item
                        ? {
                            border: "1px solid rgba(175, 47, 47, 0.2)",
                          }
                        : {}
                    }
                    onClick={() => {
                      buttonMenu(item);
                    }}
                    key={item}
                    className={style.buttonMenu}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
