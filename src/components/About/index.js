// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const altAboutValue = isDarkTheme ? 'about' : 'about'
        const renderDarkAbout = () => (
          <div className="home-container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt={altAboutValue}
              className="home-icon"
            />
            <h1 className="white-heading">About</h1>
          </div>
        )

        const renderLightAbout = () => (
          <div className="home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt={altAboutValue}
              className="home-icon"
            />
            <h1>About</h1>
          </div>
        )

        return isDarkTheme ? renderDarkAbout() : renderLightAbout()
      }}
    </ThemeContext.Consumer>
  </div>
)
export default About
