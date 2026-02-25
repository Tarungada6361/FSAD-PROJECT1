import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page home">

      {/* HERO SECTION */}
      <section className="hero">
        <h2>Welcome to the Student Project Portfolio</h2>
        <p className="hero-subtitle">
          Build • Showcase • Get Feedback • Grow
        </p>

        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
          alt="students working on projects"
        />

      
      </section>

      {/* FEATURES */}
      <section className="features">
        <h3>Why Use This Platform?</h3>

        <div className="feature-grid">
          <div className="feature-card">
            <h4>📁 Project Management</h4>
            <p>
              Upload projects with descriptions, images, and documents in one place.
            </p>
          </div>

          <div className="feature-card">
            <h4>💬 Instructor Feedback</h4>
            <p>
              Teachers can review work, give feedback, and track student progress.
            </p>
          </div>

          <div className="feature-card">
            <h4>📊 Progress Tracking</h4>
            <p>
              Track milestones and improvements throughout the academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h4>500+</h4>
          <p>Student Projects</p>
        </div>
        <div className="stat">
          <h4>100+</h4>
          <p>Active Students</p>
        </div>
        <div className="stat">
          <h4>50+</h4>
          <p>Faculty Reviewers</p>
        </div>
      </section>

      {/* ROLES */}
      <section className="roles">
        <h3>Who Is This For?</h3>

        <div className="role-grid">
          <div className="role-card">
            <h4>🎓 Students</h4>
            <p>
              Showcase your academic and personal projects in a professional way.
            </p>
          </div>

          <div className="role-card">
            <h4>🧑‍🏫 Teachers</h4>
            <p>
              Review submissions, give feedback, and monitor student performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Start Building Your Portfolio Today</h3>
        <p>
          Register with your name and email, choose your role, and begin your journey.
        </p>
        <Link to="/register"><button>Register Now</button></Link>
      </section>

    </div>
  );
}