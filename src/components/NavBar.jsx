import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    navigate('/login');
  }

  return (
    <nav className="navbar">
      <h1 className="logo">Student Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/"><span className="icon">🏠</span>Home</Link></li>   
        {!user && <li><Link to="/login"><span className="icon">🔐</span>Login</Link></li>}
        {user && user.role === 'student' && (
          <li><Link to="/student"><span className="icon">🎓</span>Student</Link></li>
        )}
        {user && user.role === 'admin' && (
          <li><Link to="/admin"><span className="icon">👩‍🏫</span>Admin</Link></li>
        )}
      </ul>
      {user && (
        <div className="user-info">
          <span>{user.name} ({user.role})</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
}
