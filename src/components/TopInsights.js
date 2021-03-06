import React from "react";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import { writeProjectData, getProjects } from "../lib/projects";
import Folders from "../components/Folders";
import ProjectFilter from "../components/ProjectFilter";
import Welcome from "../components/Welcome";
import TeamFeed from "../components/TeamFeed";
import { Link } from "react-router-dom";
import InsightCard from "../components/InsightCard";

function TopInsights() {
  const [searchFilter, setSearchFilter] = useState("");
  const [projects, setProjects] = useState([]);
  const filteredProjects = projects.filter(project => {
    return (
      project.title.toLowerCase().includes(searchFilter) ||
      project.description.toLowerCase().includes(searchFilter)
    );
  });
  const handleSearchFilterChange = event => {
    setSearchFilter(event.target.value);
  };  

  useEffect(() => {
    getProjects().then(snapshot => {
      const projects = Object.entries(snapshot.val() || {}).map(
        ([key, value]) => {
          return { id: key, ...value };
        }
      );
      setProjects(projects);
    });
  }, []);

  return (
    <div className="container mx-auto p-32">
      <seciton className="">
        <h1 className="text-6xl"> Top Insights </h1>
        <p className="text-xl ml-2"> </p>
        <div className="mt-4">
          <SearchBar handleSearchFilterChange={handleSearchFilterChange} />
        </div>
      </seciton>
      <section className="flex justify-center">
        
        <div className=" flex flex-col items-center justify-center">
          {filteredProjects.map(project => (
            <InsightCard
              id={project.id}
              key={project.id}
              date={project.date}
              description={project.description}
              Q1={project.Q1}
              Q2={project.Q2}
              Q3={project.Q3}
            />
          ))}
        </div>
        
      </section>
    </div>
  );
}

export default TopInsights;
