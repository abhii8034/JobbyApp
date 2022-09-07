import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        alt="not found"
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        we’re sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
