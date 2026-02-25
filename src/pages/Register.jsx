import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const [bio, setBio] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    // Basic registration flow: store user in context and navigate
    const user = { name, email, role, bio };
    setUser(user);
    if (role === 'student') navigate('/student');
    else navigate('/admin');
  }

  return (
    <div className="page">
      <h2>Register</h2>
      <p>Please enter your details to register. Required: name, email, role.</p>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Name:<br />
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>

        <label>
          Email:<br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>

        <label>
          Role:<br />
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <label>
          Short bio (optional):<br />
          <textarea value={bio} onChange={e => setBio(e.target.value)} />
        </label>

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}
