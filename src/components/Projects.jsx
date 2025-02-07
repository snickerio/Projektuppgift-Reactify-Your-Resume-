const Projects = () => {
  const projects = [
    {
      name: "Examination Project",
      description: "An examination assignment in HTML and CSS, showcasing fundamental web development principles.",
      features: [
        "Semantic HTML for better accessibility and SEO",
        "Responsive design for all screen sizes",
        "Sass (SCSS) for structured and maintainable styling",
        "Tailwind CSS for rapid styling",
        "SEO optimization for better search visibility"
      ],
      technologies: ["HTML5", "CSS3", "Sass (SCSS)", "Tailwind CSS"],
      contributors: ["Viktorwahlqvist", "Tobias-Thor", "25ismail", "VitalijsEnglund"]
    },
    {
      name: "Solaris - Solar System Website",
      description: "A school project showcasing a website about the solar system.",
      features: [
        "Displays detailed information about each planet",
        "Search functionality to find planets quickly",
        "Responsive design for desktop and mobile"
      ],
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h2>{project.name}</h2>
            <p>{project.description}</p>

            {/* Show Key Features only if there are any */}
            {project.features?.length > 0 && (
              <>
                <h3>Key Features:</h3>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            <h3>Technologies Used:</h3>
            <p>{project.technologies.join(", ")}</p>

            {/* Show Contributors only if present */}
            {project.contributors?.length > 0 && (
              <>
                <h3>Contributors:</h3>
                <p>{project.contributors.join(", ")}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
