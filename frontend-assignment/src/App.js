import React, { useEffect, useState } from "react";
import Table from "./components/Table";

import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );
        const data = await response.json();
        setProjects(data); 
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  console.log("Project: " + JSON.stringify(projects));

  return (
    <div className="app">
      <h1>Highly Rated Kickstarter Projects</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && <Table data={projects} />}
    </div>
  );
};

export default App;
