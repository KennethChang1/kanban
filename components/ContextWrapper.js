import Context from "@/context/Context";
import { useState } from "react";

function ContextWrapper({ children }) {
  const [addTask, setAddTask] = useState(false);
  const [taskArray, setTaskArray] = useState([]);

  return (
    <Context.Provider value={{ addTask, setAddTask, taskArray, setTaskArray }}>
      {children}
    </Context.Provider>
  );
}

export default ContextWrapper;
