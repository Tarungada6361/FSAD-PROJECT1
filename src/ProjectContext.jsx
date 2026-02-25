import { createContext, useState } from 'react';

export const ProjectContext = createContext({
  projects: [],
  addProject: () => {},
  updateProject: () => {},
});

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);

  function addProject(project) {
    setProjects([...projects, project]);
  }

  function updateProject(index, updates) {
    setProjects(
      projects.map((p, i) => (i === index ? { ...p, ...updates } : p)),
    );
  }

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
