// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const renderDarkNavbar = () => (
        <nav>
          <ul className="navbar-light-container">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="theme-icon"
              />
            </li>
            <div>
              <Link to="/" className="dark-theme">
                Home
              </Link>
              <Link to="/about" className="dark-theme">
                About
              </Link>
            </div>
            <li>
              <button type="button" className="theme-button" testid="theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-icon"
                  onClick={onClickToggleTheme}
                />
              </button>
            </li>
          </ul>
        </nav>
      )

      const renderLightNavbar = () => (
        <nav>
          <ul className="navbar-container">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="theme-icon"
              />
            </li>

            <div>
              <Link to="/" className="light-theme">
                Home
              </Link>
              <Link to="/about" className="light-theme">
                About
              </Link>
            </div>
            <li>
              <button type="button" className="theme-button" testid="theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-icon"
                  onClick={onClickToggleTheme}
                />
              </button>
            </li>
          </ul>
        </nav>
      )

      return isDarkTheme ? renderDarkNavbar() : renderLightNavbar()
    }}
  </ThemeContext.Consumer>
)
export default Navbar
