import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const aboutData = {
    education: [
      { school: "KYH Yrkeshögskola", degree: "Front End Developer, Computer Science", period: "Aug 2024 - Maj 2026" },
      { school: "Hälsingegymnasiet", degree: "High School Diploma, Teknik, information och media", period: "Aug 2013 - Jun 2016" }
    ],
    jobExperience: [
      { role: "Lagermedarbetare", company: "Partyking AB", period: "Sep 2023 - Dec 2023", description: "Lagarbete och orderhantering." },
      { role: "Telefonist", company: "Xzakt Kundrelation AB", period: "Feb 2022 - Okt 2022", description: "Kundsupport, Amazon Web Services (AWS), Avaya IP Telephony." },
      { role: "Customs Broker", company: "UPS", period: "Jun 2021 - Nov 2021", description: "Tullhantering, problemlösning." }
    ]
  };

  // Funktion för att ta emot och hantera formulärdata
  const handleContactFormData = (formData) => {
    console.log("Form Data Received:", formData);
    // Här kan du exempelvis vidarebefordra datan till en server eller någon annan process
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe aboutData={aboutData} />} />
        <Route path="/projects" element={<Projects />} />
        {/* Skicka handleContactFormData som prop till Contact */}
        <Route path="/contact" element={<Contact onFormSubmit={handleContactFormData} />} />
      </Routes>
    </Router>
  );
};

export default App;
