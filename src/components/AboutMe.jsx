const AboutMe = ({ aboutData }) => {
  return (
    <section>
      <h2>Om mig</h2>
      <p>Jag är en blivande frontendutvecklare med erfarenhet inom HTML, CSS och JavaScript.</p>

      <h3>Utbildning</h3>
      <ul>
        {aboutData.education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.school}</strong> <br />
            {edu.degree} ({edu.period})
          </li>
        ))}
      </ul>

      <h3>Jobberfarenhet</h3>
      <ul>
        {aboutData.jobExperience.map((job, index) => (
          <li key={index}>
            <strong>{job.role}</strong> - {job.company} ({job.period}) <br />
            {job.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMe;
