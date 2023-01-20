import { useContext, useState } from "react";
import Context from "@/context/Context";

const TaskForm = () => {
  const { taskArray, setTaskArray, setAddTask } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [subtasks, setSubtasks] = useState([""]);
  const [status, setStatus] = useState("todo");

  console.log(taskArray);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskArray([
      ...taskArray,
      { id: Math.random(), title, desc, subtasks, status },
    ]);
    setAddTask(false);
  };

  const addSubtask = () => {
    setSubtasks([...subtasks, ""]);
  };

  const deleteSubtask = (index) => {
    console.log(index);
    const newSubtask = subtasks.filter(
      (item) => subtasks.indexOf(item) != index
    );
    setSubtasks(newSubtask);
  };

  const handleChange = (e, index) => {
    const subtask = subtasks.map((c, i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return c;
      }
    });
    setSubtasks(subtask);
  };

  return (
    <div className="card">
      <p className="card__header">Add New Task</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="card__form-wrapper">
          <label className="card__label" htmlFor="title">
            Title
          </label>
          <input
            className="card__input card__input--small"
            type="text"
            name="title"
            id="title"
            placeholder="e.g. Take coffee break"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="card__form-wrapper">
          <label className="card__label" htmlFor="desc">
            Description
          </label>
          <textarea
            className="card__input"
            name="desc"
            id="desc"
            cols="30"
            rows="4"
            placeholder="e.g. It’s always good to take a break. This 
            15 minute break will  recharge the batteries 
            a little."
            onChange={(e) => setDesc(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="card__form-wrapper">
          <label className="card__label" htmlFor="subtask">
            Subtasks
          </label>
          <div className="card__form-subtask">
            {subtasks.map((item, index) => (
              <div key={index}>
                <input
                  className="card__input card__input--small"
                  type="text"
                  name="subtask"
                  id="subtask"
                  placeholder="e.g. Make coffee"
                  value={item}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <img
                  onClick={() => deleteSubtask(index)}
                  src="/icon-cross.svg"
                  alt=""
                />
              </div>
            ))}
          </div>
          <button onClick={addSubtask} type="button" className="card__form-btn">
            Add New Subtask
          </button>
        </div>

        <div className="card__form-wrapper">
          <label className="card__label" htmlFor="status">
            Status
          </label>
          <select
            className="card__input"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
          </select>
        </div>
        <button className="card__form-btn">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
