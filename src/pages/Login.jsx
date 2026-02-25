import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ name, email, role });
    if (role === 'student') navigate('/student');
    else navigate('/admin');
  }

  return (
    <div className="page">
      <h2>👥 Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Name:<br />
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:<br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Role:<br />
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
