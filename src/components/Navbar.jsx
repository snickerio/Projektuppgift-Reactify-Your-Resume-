import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Importera useDispatch och useSelector
import { useEffect } from "react";

// Action för att sätta temat (använd den action du definierade)
const setTheme = (theme) => ({
  type: 'SET_THEME',
  payload: theme,
});

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme); // Hämta aktuellt tema från Redux-staten

  // Funktion för att växla temat
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme)); // Skicka action för att sätta nytt tema
  };

  useEffect(() => {
    document.body.className = theme; // Uppdatera kroppens klass baserat på tema (kan användas för CSS styling)
  }, [theme]); // Kör denna kod när temat ändras

  return (
    <nav className={theme}>
      <ul>
        <li><Link to="/">Om mig</Link></li>
        <li><Link to="/projects">Projekt</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
      <button onClick={handleThemeToggle}>
        Växla Tema ({theme === 'light' ? 'Mörkt' : 'Ljust'})
      </button>
    </nav>
  );
};

export default Navbar;
