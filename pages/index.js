import Navbar from "@/components/Navbar";
import TaskForm from "@/components/TaskForm";
import { useContext } from "react";
import Context from "@/context/Context";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const { addTask, taskArray, setTaskArray, setAddTask } = useContext(Context);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        {addTask && <TaskForm></TaskForm>}
        <div className="board-wrapper">
          <section className="board">
            <div className="board__heading">
              <div className="circle"></div>
              <p className="board__header">TODO</p>
            </div>
            {taskArray.map((item) => (
              <TaskCard data={item}></TaskCard>
            ))}
          </section>

          <section className="board">
            <div className="board__heading">
              <div className="circle"></div>
              <p className="board__header">DOING</p>
            </div>
          </section>

          <section className="board">
            <div className="board__heading">
              <div className="circle"></div>
              <p className="board__header">DONE</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
