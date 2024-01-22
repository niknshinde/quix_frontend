import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('token2');
    navigate('/');
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    // Close the profile dropdown when the route changes
    setShowProfileDropdown(false);
  }, [location]);

  // Check if the user is an admin based on the user's role
  const isAdmin = localStorage.getItem('token2') && localStorage.getItem('userrole') === 'admin';

  return (
    <nav className="make_top navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Quix
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            {isAdmin && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
                  aria-current="page"
                  to="/dashboard"
                >
                  DashBoard
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/leaderBoard' ? 'active' : ''}`} to="/leaderBoard">
                LeaderBoard
              </Link>
            </li>

          
          </ul>

          {localStorage.getItem('token2') ? (
            <div className="profile">
              <Link to="/profile" aria-pressed="true">
              <i class="bi bi-person-circle"></i>
              </Link>
            </div>
          ) : (
            <form className="flex-form" role="search">
              <Link to="/login" aria-pressed="true">
                <button className="nav-btn">Login</button>
              </Link>
              <Link to="/signup" aria-pressed="true">
                <button className="nav-btn">SignUp</button>
              </Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;