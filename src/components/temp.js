import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token2');
    navigate('/');
  };

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  // Check if the user is an employer based on the user's role
  const isAdmin = localStorage.getItem('token2') && localStorage.getItem('userrole') === 'admin';

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        Quiz
        </Link>
        <button
  className="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
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
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                About
              </Link>
            </li>

            

          </ul>
          {!localStorage.getItem('token2') ? (
            <form className="flex-form" role="search">

            
              
              <Link to="/login"   aria-pressed="true">
                <button className='nav-btn'>Login</button>
              </Link>

              <Link to="/signup"   aria-pressed="true">
                <button className='nav-btn'>SignUp</button>
              </Link>
              
            </form>
          ) : (
            <button onClick={handleLogOut} className="nav-btn">
              Log-Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;