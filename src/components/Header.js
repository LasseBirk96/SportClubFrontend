import { NavLink} from "react-router-dom";
export default function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Hold
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page1">
          Opret Hold
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page2">
           Sportsgrene
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page3">
          Rediger Hold
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page4">
          Slet Hold
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page5">
          Tilføj Sport
        </NavLink>
      </li>
    </ul>
  );
}