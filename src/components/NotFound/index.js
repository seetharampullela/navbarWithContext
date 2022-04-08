// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const renderDarkNotFound = () => (
          <div className="not-found-dark-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-heading">Lost your way?</h1>
            <p className="not-found-heading">
              We cannot seem to find the page you are looking for
            </p>
          </div>
        )

        const renderLightNotFound = () => (
          <div className="not-found-light-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1>Lost your way?</h1>
            <p>We cannot seem to find any page you are looking for</p>
          </div>
        )

        return (
          <div>
            {isDarkTheme ? renderDarkNotFound() : renderLightNotFound()}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default NotFound
