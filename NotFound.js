import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>That page cannot be found.</h2>
      <Link to="/">Back Home</Link>
    </div>
  );
}
