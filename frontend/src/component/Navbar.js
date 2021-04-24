import './Navbar.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ME_QUERY } from '../graphql/meQuery'
import { useSession } from '../context/Sessioncontext'
function Navbar() {
  const { loading, user, logout: handleLogout } = useSession()
  console.log(user)
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light container NavStepie">
        <Link to="/">
          <a class="navbar-brand Navmain">STEPIE</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <Link to="/product">
              <a class="nav-link Navchild">product</a>
            </Link>
            </li>
            <li class="nav-item">
            <Link to="/promotion">
              <a class="nav-link Navchild">Promotion</a>
            </Link>
            </li>
          </ul>
          {user?.name}
          <Link to="/login">
          <button class="btn btn-light ml-2" type="button" id="button-addon2"><a className="loginbutton">Login</a></button>
          </Link>
          <Link to="/cart">
          <button class="btn btn-light ml-2" type="button" id="button-addon2"><a className="loginbutton">CART </a></button>
          </Link>
        </div>
      </nav>
  
    </>
  );  
}

export default Navbar;