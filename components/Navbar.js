import { useContext } from "react";
import Context from "@/context/Context";

const Navbar = () => {
  const { setAddTask } = useContext(Context);
  return (
    <nav className="nav">
      <div className="nav-container">
        <img src="/logo-mobile.svg" alt="" />
        <div className="nav-btn-container">
          <button className="nav-btn">Platform Launch</button>
          <img src="/icon-chevron-down.svg" alt="" />
        </div>
      </div>
      <div className="nav-container">
        <img
          onClick={() => setAddTask((prev) => !prev)}
          src="/icon-add-task-mobile.svg"
          alt=""
        />
        <img src="/icon-vertical-ellipsis.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
