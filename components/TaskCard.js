const TaskCard = ({ data }) => {
  console.log(data);
  return (
    <div className="task-card">
      <p className="task-card__heading">{data.title}</p>
      <p className="task-card__subheading">
        0 of {data.subtasks.length} subtasks
      </p>
    </div>
  );
};

export default TaskCard;
