import { useContext, useState } from 'react';
import { ProjectContext } from '../ProjectContext';
import { UserContext } from '../UserContext';

export default function StudentDashboard() {
  const { projects, addProject, updateProject } = useContext(ProjectContext);
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState(null); // will hold {name,url}
  const [mediaFile, setMediaFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      const project = {
        title,
        description,
        owner: user?.name || 'student',
        ownerEmail: user?.email || '',
        progress: 0,
        media,
      };
      addProject(project);
      setTitle('');
      setDescription('');
      setMedia(null);
      setMediaFile(null);
    }
  }

  return (
    <div className="page">
      <h2>🎓 Student Dashboard</h2>
      {user && <p>Welcome, {user.name}!</p>}
      <form onSubmit={handleSubmit} className="project-form">
        <h3>Add a new project</h3>
        <label>
          Title:<br />
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:<br />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <label>
          Media:<br />
          <input
            type="file"
            onChange={e => {
              const file = e.target.files[0];
              if (file) {
                setMediaFile(file);
                const reader = new FileReader();
                reader.onload = () => {
                  setMedia({ name: file.name, url: reader.result });
                };
                reader.readAsDataURL(file);
              } else {
                setMediaFile(null);
                setMedia(null);
              }
            }}
          />
        </label>
        <button type="submit">Upload</button>
      </form>

      <section className="projects-list">
        <h3>Your Projects</h3>
        {projects.filter(p => p.owner === 'student').length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          <ul>
            {projects
              .filter(p => p.owner === 'student')
              .map((p, idx) => (
                <li key={idx}>
                  <strong>{p.title}</strong> - {p.description} <br />
                  {p.media && <span>Media: {p.media.name}<br/></span>}
                  Progress: {p.progress}%
                </li>
              ))}
          </ul>
        )}
      </section>
    </div>
  );
}
