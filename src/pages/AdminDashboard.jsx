import { useContext, useState } from 'react';
import { ProjectContext } from '../ProjectContext';
import { UserContext } from '../UserContext';

export default function AdminDashboard() {
  const { projects, updateProject } = useContext(ProjectContext);
  const { user } = useContext(UserContext);
  const [feedbacks, setFeedbacks] = useState({});

  function handleFeedback(idx) {
    const note = feedbacks[idx] || '';
    updateProject(idx, { feedback: note });
  }

  function handleChange(idx, e) {
    setFeedbacks({ ...feedbacks, [idx]: e.target.value });
  }

  return (
    <div className="page">
      <h2>👩‍🏫 Admin Dashboard</h2>
      {user && <p>Welcome, {user.name}!</p>}
      <section className="projects-list">
        <h3>All Student Projects</h3>
        {projects.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <ul>
            {projects.map((p, idx) => (
              <li key={idx}>
                <strong>{p.title}</strong> by {p.owner}
                {p.ownerEmail && <span> ({p.ownerEmail})</span>}<br />
                {p.description}<br />
                {p.media && (
                  <span>
                    Media: {p.media.name} <br />
                    <a href={p.media.url} download={p.media.name}>Download</a><br />
                  </span>
                )}
                Progress: <input
                  type="number"
                  value={p.progress}
                  min="0"
                  max="100"
                  onChange={e => updateProject(idx, { progress: e.target.value })}
                  style={{ width: '60px' }}
                />%<br />
                <label>
                  Feedback:<br />
                  <textarea
                    value={feedbacks[idx] || ''}
                    onChange={e => handleChange(idx, e)}
                  />
                </label>
                <button onClick={() => handleFeedback(idx)}>Save</button>
                {p.feedback && (
                  <p className="saved-feedback">Saved: {p.feedback}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
