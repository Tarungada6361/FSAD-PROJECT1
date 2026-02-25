import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { ProjectProvider } from './ProjectContext';
import { UserProvider } from './UserContext';

export default function App() {
  return (
    <UserProvider>
      <ProjectProvider>
        <Router>
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student" element={<StudentDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </div>
        </Router>
      </ProjectProvider>
    </UserProvider>
  );
}

