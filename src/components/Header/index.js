import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {BsBriefcaseFill} from 'react-icons/bs'

import {HiOutlineLogout, HiHome} from 'react-icons/hi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <div className="nav-mobile-btn-container">
            <Link to="/">
              <button type="button" className="nav-mobile-btn">
                <HiHome size="24" />
              </button>
            </Link>
            <Link to="/jobs">
              <button type="button" className="nav-mobile-btn">
                <BsBriefcaseFill size="24" />
              </button>
            </Link>

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={onClickLogout}
            >
              <HiOutlineLogout size="24" />
            </button>
          </div>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
