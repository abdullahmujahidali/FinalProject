import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"
import './Style.css';
import "./main.js"
// import {} from "../components/screens/Home"
const NavBar = () => {
  const { state, dispatch } = useContext(UserContext)
  const renderList = () => {
    if (state) {
      return [
        <li className="nav-item">
          <Link className="nav-link" to="/create">CREATE POST</Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/profile">PROFILE</Link>
        </li>,
        <button type="button" className="btn btn-warning">
          <Link to="/"> <i className="fas fa-sign-out-alt  mx-2"></i></Link>
        </button>
      ]
    }
    else {
      return [
        <li className="nav-item active">
          <a className="nav-link" href="/">HOME
          <span className="sr-only">(current)</span>
          </a>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/">ABOUT</Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/">CONTACT</Link>
        </li>,
        <button type="button" className="btn btn-warning">
          <Link to="/SignIn"> <i className="fas fa-sign-in-alt  mx-2"></i></Link>
        </button>
      ]

    }
  }

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg">
        <Link  className="navbar-brand" to={state?"/PostHome":"/"}>
          <i className="fas fa-brain fa-2x mx-3"></i>BigBrains</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-align-right text-light"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className="navbar-nav">
            {renderList()}

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;