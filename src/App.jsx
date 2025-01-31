import { createContext, useEffect, useState } from "react";
import { data } from "./assets/data/data.jsx";
import Header from "./assets/components/Header.jsx";
import Input from "./assets/components/Input.jsx";
import CountryContent from "./assets/components/CountryContent.jsx";
import CountryDetails from "./assets/components/CountryDetails.jsx";
import "./assets/css/darkMode.css";

export const DataContext = createContext(null); // tüm datayı gönderebilmek için useContext
export const ThemeContext = createContext(null); // temayı tüm componentlere geçirmek için useContext

function App() {
  const [showDetails, setShowDetails] = useState(false); // Detay sayfasını kontrol eden state
  const [selectedCountry, setSelectedCountry] = useState(null); // Tıklanan ülkeyi saklayan state
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  function handleCountryClick(country) {
    setSelectedCountry(country);
    setShowDetails(true); // Detay sayfasını göster
  }

  function handleBorderCountryClick(borderCountry) {
    setSelectedCountry(borderCountry);
  }

  function getSystemThemePref() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light';
  }

  const [theme, setTheme] = useState(localStorage.theme || getSystemThemePref()); // dark mode için olan state

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function handleChangeTheme() {
    setTheme(prev => (prev === "dark-mode" ? "light" : "dark-mode"));
    localStorage.theme = theme === "dark-mode" ? "light" : "dark-mode";
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <DataContext.Provider value={{ data }}>
        <div className="container">
          {showDetails ? (
            <>
              <Header handleChangeTheme={handleChangeTheme} />
              <CountryDetails country={selectedCountry} setShowDetails={setShowDetails} onClickBorderCountry={handleBorderCountryClick} />
            </>
          ) : (
            <>
              <Header handleChangeTheme={handleChangeTheme} />
              <Input
                country={country}
                setCountry={setCountry}
                region={region}
                setRegion={setRegion}
              />

              <CountryContent
                country={country}
                region={region}
                onCountryClick={handleCountryClick}

              />
            </>
          )}
        </div>
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;