import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/francois4.jpg" alt="profil-pic" />
          <h3>François RAMOS</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" className={(nav) => (nav.isActive ? '' : '')}>
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competences"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://fr.linkedin.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://mobile.twitter.com/?lang=fr"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>© François | 2021 - {new Date().getFullYear()} </p>
        </div>
      </div>
    </div>
  )
}

export default Navigation
