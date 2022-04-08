// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const altValue = isDarkTheme ? 'home' : 'home'

        const renderDarkHome = () => (
          <div className="home-container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt={altValue}
              className="home-icon"
            />
            <h1 className="white-heading">Home</h1>
          </div>
        )

        const renderLightHome = () => (
          <div className="home-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt={altValue}
              className="home-icon"
            />
            <h1>Home</h1>
          </div>
        )

        return isDarkTheme ? renderDarkHome() : renderLightHome()
      }}
    </ThemeContext.Consumer>
  </div>
)
export default Home
