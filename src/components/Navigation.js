import { Link } from "react-router-dom";
export default function Navigation(props) {
    return (
      <div>
       <Link to="/">
        <div>HOME</div>
      </Link>

      <Link to="/stocks">
        <div>STOCKS</div>
      </Link>

      <Link to="/about">
        <div>ABOUT</div>
      </Link>

      </div>
    )
  }
  