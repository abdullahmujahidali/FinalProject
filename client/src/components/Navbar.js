import React from "react"
import {Link} from "react-router-dom"
import './Style.css';
import "./main.js"
// import {} from "../components/screens/Home"
const NavBar=()=>{
    return (
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <i className="fas fa-brain fa-2x mx-3"></i>BigBrains</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-align-right text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">HOME
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              {/* #section-1 */}
              <li className="nav-item">
                <Link className="nav-link" to="/section-1">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">PRICE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Post</Link>
              </li>
              <button type="button" className="btn btn-warning">
               <Link to="/SignIn"> <i className="fas fa-sign-in-alt  mx-2"></i></Link>
              </button>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default NavBar;