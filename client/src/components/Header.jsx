import React, { useContext } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { FaHome, FaTint, FaHandHoldingMedical, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaHistory } from 'react-icons/fa'

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  
  function handleLogout() {
    logout()
    navigate('/')
  }
  
  // Cyberpunk button style classes
  const cyberpunkButtonClasses = `
    nav-link px-3 py-2 mx-1 rounded-lg
    text-white font-semibold
    transition-all duration-300
    relative overflow-hidden
    bg-gradient-to-r from-red-600 to-red-700
    hover:from-red-500 hover:to-red-600
    border border-red-400
    shadow-md hover:shadow-lg
  `;
  
  // Glow effect styles
  const glowStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0))',
    opacity: '0',
    transition: 'opacity 0.3s ease',
    borderRadius: '0.5rem',
    boxShadow: '0 0 15px rgba(220, 38, 38, 0.7), inset 0 0 10px rgba(220, 38, 38, 0.4)',
    zIndex: '0'
  };
  
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ 
      backgroundColor: '#111', 
      fontFamily: 'Poppins, sans-serif',
      borderBottom: '1px solid rgba(220, 38, 38, 0.5)'
    }}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center text-white">
          <FaTint className="me-2" style={{ 
            filter: 'drop-shadow(0 0 5px rgba(220, 38, 38, 0.8))',
            color: '#ff3a3a'
          }} size={24} />
          <span style={{ 
            fontWeight: '600', 
            fontSize: '1.4rem',
            background: 'linear-gradient(to right, #ffffff, #ff3a3a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 5px rgba(220, 38, 38, 0.5)'
          }}>LifeDrop</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ borderColor: 'rgba(255,255,255,0.5)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? `${cyberpunkButtonClasses} active` : cyberpunkButtonClasses}
                onMouseOver={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '0'}
              >
                <div className="glow-effect" style={glowStyles}></div>
                <div className="d-flex align-items-center position-relative z-10">
                  <FaHome className="me-2" />
                  Home
                </div>
              </NavLink>
            </li>

            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink 
                    to="/donate" 
                    className={({isActive}) => isActive ? `${cyberpunkButtonClasses} active` : cyberpunkButtonClasses}
                    onMouseOver={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '0'}
                  >
                    <div className="glow-effect" style={glowStyles}></div>
                    <div className="d-flex align-items-center position-relative z-10">
                      <FaTint className="me-2" />
                      Donate Blood
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    to="/request" 
                    className={({isActive}) => isActive ? `${cyberpunkButtonClasses} active` : cyberpunkButtonClasses}
                    onMouseOver={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '0'}
                  >
                    <div className="glow-effect" style={glowStyles}></div>
                    <div className="d-flex align-items-center position-relative z-10">
                      <FaHandHoldingMedical className="me-2" />
                      Request Blood
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    to="/my-donations" 
                    className={({isActive}) => isActive ? `${cyberpunkButtonClasses} active` : cyberpunkButtonClasses}
                    onMouseOver={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '0'}
                  >
                    <div className="glow-effect" style={glowStyles}></div>
                    <div className="d-flex align-items-center position-relative z-10">
                      <FaHistory className="me-2" />
                      My Donations
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={handleLogout} 
                    className={cyberpunkButtonClasses}
                    onMouseOver={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '0'}
                  >
                    <div className="glow-effect" style={glowStyles}></div>
                    <div className="d-flex align-items-center position-relative z-10">
                      <FaSignOutAlt className="me-2" />
                      Logout
                    </div>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink 
                    to="/register" 
                    className={({isActive}) => isActive ? `${cyberpunkButtonClasses} active` : cyberpunkButtonClasses}
                    onMouseOver={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '0'}
                  >
                    <div className="glow-effect" style={glowStyles}></div>
                    <div className="d-flex align-items-center position-relative z-10">
                      <FaUserPlus className="me-2" />
                      Register
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    to="/login" 
                    className={({isActive}) => isActive ? `${cyberpunkButtonClasses} active` : cyberpunkButtonClasses}
                    onMouseOver={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.querySelector('.glow-effect').style.opacity = '0'}
                  >
                    <div className="glow-effect" style={glowStyles}></div>
                    <div className="d-flex align-items-center position-relative z-10">
                      <FaSignInAlt className="me-2" />
                      Login
                    </div>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header