import { useParams, useNavigate } from "react-router-dom";
export default function TaskDetails({ data, deleter }) {
  const { taskID } = useParams();
  const navigate = useNavigate();
  const taskObject = data.filter((e) => e.id == taskID);
  const { title, detail, date } = taskObject[0];

  const handleClick = () => {
    deleter(taskID);
    navigate("/");
  };
  return (
    <div className="task-details">
      <article>
        <h2>{title}</h2>
        <p>{detail}</p>
        <div>{date}</div>
        <button onClick={handleClick}>Delete Task</button>
      </article>
    </div>
  );
}
