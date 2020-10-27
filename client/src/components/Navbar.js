import React from "react"
import './Style.css';
const NavBar=()=>{
    return (
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <i className="fas fa-brain fa-2x mx-3"></i>BigBrains</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-align-right text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">HOME
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-1">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PRICE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
              <button type="button" className="btn btn-warning">
                <i className="fas fa-sign-in-alt  mx-2"></i>
              </button>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default NavBar;