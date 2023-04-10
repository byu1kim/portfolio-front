import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page pt-14">
      <div className="h-96 my-20 center title">
        <div>Page Not Found.</div>
        <Link to="/">
          <div className="btns3 text-xl my-5">Back to Home</div>
        </Link>
      </div>
    </div>
  );
}
