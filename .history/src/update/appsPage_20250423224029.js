import React, { useState, useEffect } from "react";
import "./appsPage.css";
import { Link } from 'react-router-dom';
import Chip from "../components/chips.js";
import projectsData from "../dataPoint/AllProjects.js";

function Apps() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData.allProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Extract unique categories from project tech stacks
  const categories = ['All', ...new Set(projectsData.allProjects.flatMap(project => project.techStacks))];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = projectsData.allProjects;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project =>
        project.techStacks.includes(selectedCategory)
      );
    }

    // Filter by search term
    if (searchTerm) {
      console.log('Search term:', searchTerm);
      console.log('Before filter:', filtered.length);
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('After filter:', filtered.length);
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading amazing projects...</p>
      </div>
    );
  }

  return (
    <div className="appsHolder">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="appsHeading">
            Quality crafted <span className="apps-span">projects</span>
          </h1>
          <p className="hero-subtitle">Explore our portfolio of innovative digital solutions</p>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="controls-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="categories-container">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="sites-holder">
        {filteredProjects.length === 0 ? (
          <div className="no-results">
            <h2>No projects found</h2>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <ul className="sites-list">
            {filteredProjects.map((project, index) => (
              <li key={project.id} className="sites" style={{animationDelay: `${index * 0.1}s`}}>
                <Link className='link-list' to={project.link} target="_blank">
                  <div className="project-card">
                    <div className="card-header">
                      <img className="site-logo" src={project.icon} alt={`${project.title} logo`} />
                      <div className="card-badges">
                        {project.techStacks.map((tech, i) => (
                          <Chip key={i} tech={tech} color={tech === "Online" ? "#4CAF50" : tech === "Under Maintenance" ? "#FFC107" : "#2196F3"} />
                        ))}
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="site-title">{project.title}</h2>
                      <p className="site-location">{project.location}</p>
                      <p className="site-desc">{project.desc}</p>
                    </div>
                    <div className="card-footer">
                      <span className="view-project">View Project</span>
                      <span className="arrow-icon">→</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Apps;
