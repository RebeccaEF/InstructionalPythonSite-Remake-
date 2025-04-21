import React, { useState, useEffect } from 'react';
import './App.css'; // For your SCSS or CSS styling

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch resources from local JSON (you can replace with real API later)
    fetch('/resources.json')
      .then((response) => response.json())
      .then((data) => setResources(data))
      .catch((error) => console.error('Error fetching resources:', error));
  }, []);

  return (
    <div className="app-container">
      <h1>🐍 Python Learning Hub</h1>
      <div className="resource-grid">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              View Tutorial
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
