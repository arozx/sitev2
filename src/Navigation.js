import { Link } from "react-router-dom";
function Navigation() {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
export default Navigation;