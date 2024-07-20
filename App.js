import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import TaskDetails from "./TaskDetails";
import NotFound from "./NotFound";

export default function App() {
  const [data, setData] = useState([
    {
      title: "Car Service",
      detail: "Ask about warranty on vehicle",
      date: "7/18/24",
      id: "0",
    },
    {
      title: "Yoga Class",
      detail: "Bring your own mat",
      date: "7/19/24",
      id: "1",
    },
  ]);

  const deleteTask = function (id) {
    setData((data) => data.filter((task) => task.id != id));
  };

  const addTask = function (task) {
    setData((data) => [...data, task]);
    console.log(data);
  };
  return (
    <>
      <div className="footer">
        Project 4 | Webb Apps Devemlopment Summer 2024 |
        <a href="https://github.com/juligq14"> Github juligq14</a>{" "}
      </div>
      <BrowserRouter>
        <div className="Application">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home data={data} />} />
              <Route path="/create" element={<Create adder={addTask} />} />
              <Route
                path="/tasks/:taskID"
                element={<TaskDetails data={data} deleter={deleteTask} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
