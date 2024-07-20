import TaskList from "./TaskList";
export default function Home({ data }) {
  return <div className="home">{<TaskList data={data} />}</div>;
}
