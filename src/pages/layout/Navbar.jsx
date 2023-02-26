import './style/navbar.css';
import './style/Mobile_screen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return(
      <>
          <div className="container-fluid p-0">
              <nav className="navbar navbar-expand-lg navbar-light">
                  <a href="#" className="navbar-brand"><FontAwesomeIcon icon={ faMusic } /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                      <FontAwesomeIcon icon={ faListSquares } />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <div className="ml-auto"></div>
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a href="#" className="nav-link">Home</a>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="nav-link">About</a>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="nav-link">Features</a>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="nav-link">Pricing</a>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="nav-link">Contact</a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </>
  )
}

export default Navbar;