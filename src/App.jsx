import { useState } from "react";
import { data } from "./assets/data/data.jsx";

function App() {
  const [showDetails, setShowDetails] = useState(false); // Detay sayfasını kontrol eden state
  const [selectedCountry, setSelectedCountry] = useState(null); // Tıklanan ülkeyi saklayan state
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  ); // Tema değişikliği için

  function handleCountryClick(country) {
    setSelectedCountry(country);
    setShowDetails(true); // Detay sayfasını göster
  }

  function handleBackClick() {
    setShowDetails(false);
  }

  function handleBorderCountryClick(borderCountry) {
    setSelectedCountry(borderCountry);
  }

  if (isDarkMode) {
    document.body.classList.add("darkMode");
  }
  else {
    document.body.classList.remove("darkMode");
  }

  function changeTheme() {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("isDarkMode", newTheme.toString());
  }

  return (
    <div>
      {showDetails ? (
        <>
          <Header changeTheme={changeTheme} isDarkMode={isDarkMode} />
          <CountryDetails country={selectedCountry} onBackClick={handleBackClick} onClickBorderCountry={handleBorderCountryClick} />
        </>
      ) : (
        <>
          <Header changeTheme={changeTheme} isDarkMode={isDarkMode} />
          <Input
            country={country}
            setCountry={setCountry}
            region={region}
            setRegion={setRegion} />

          <CountryContent
            country={country}
            region={region}
            onCountryClick={handleCountryClick}
          />
        </>
      )}
    </div>
  );
}

function Header({ changeTheme }) {
  return (
    <>
      <div className="header">
        <h1>Where in the world?</h1>
        <button onClick={changeTheme}>
          Dark Mode
        </button>
      </div>
    </>
  )
}

const regions = Array.from(new Set(data.map(x => x.region)));

function Input({ setCountry, setRegion }) {

  function handleChange(e) {
    setCountry(e.target.value.toLowerCase());
  }

  function handleSelectChange(e) {
    setRegion(e.target.value);
  }

  return (
    <>
      <div className="input-area">
        <div className="input">
          <img src="/img/search-icon.svg" alt="Search Icon" />
          <input type="text" onChange={handleChange} placeholder="Search for a country..." />
        </div>
        <div className="select-area">
          <select onChange={handleSelectChange} className="regions">
            <option value="">Filter by Region</option>
            {regions.map(x => <option key={x}> {x}</option>)}
          </select>
        </div>
      </div >
    </>
  );
}

function CountryContent({ country, region, onCountryClick }) {
  const dataItems = data
    .filter(x => x.name.common.toLowerCase().includes(country) && x.region.includes(region))
    .map(x => <Countries
      key={x.name.common}
      name={x.name.common}
      population={x.population}
      region={x.region}
      capital={x.capital}
      img={x.flags.png}
      onCountryClick={() => onCountryClick(x)} />)

  return (
    <>
      <div className="countries">
        <div className="country-list">{dataItems}</div>
      </div>
    </>
  )
}

function Countries({ name, img, population, region, capital, onCountryClick }) {

  return (
    <>
      <div className="countryItem">
        <div onClick={onCountryClick} className="card-inner">
          <img src={img} alt={name} />
          <div className="card-info">
            <h2>{name}</h2>
            <p>
              <span>Population: </span>
              {population}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
            <p>
              <span>Capital: </span>
              {capital}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function CountryDetails({ country, onBackClick, onClickBorderCountry }) {
  if (!country) return null; // Eğer seçilen ülke yoksa render etme

  return (
    <>
      <div className="country-details">
        <button className="backBtn" onClick={onBackClick}>
          Back
        </button>
        <div className="card-details">
          <img src={country.flags.png} alt={country.name} />
          <div className="card-details-info">
            <div className="card-detail-first">
              <h1>{country.name.common}</h1>
              <p><strong>Native Name: </strong>{country.name.official}</p>
              <p><strong>Population:</strong>{country.population}</p>
              <p><strong>Region: </strong>{country.region}</p>
              <p><strong>Sub Region: </strong>{country.subregion ? country.subregion : "-"}</p>
              <p><strong>Capital: </strong> {country.capital.join(", ")}</p>
            </div>
            <div className="card-detail-second">
              <p><strong>Top Level Domain: </strong> {country.tld.join(", ")}</p>
              <p><strong>Currencies: </strong>{Object.values(country.currencies)
                .map((x) => x.name)
                .join(", ")}</p>
              <p><strong>Languages: </strong>{Object.values(country.languages).join(", ")}</p>
            </div>
            <div className="border-countries-content">
              <h4>Border Countries:</h4>
              <div className="border-countries">
                <BorderCountries borders={country.borders} onClickBorderCountry={onClickBorderCountry} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

function BorderCountries({ borders, onClickBorderCountry }) {
  return borders ?
    borders.map((x) => {
      const countryData = data.find((y) => y.cca3 === x);
      return (
        <button onClick={() => onClickBorderCountry(countryData)} key={x} className="borderBtn">
          {countryData.name.common}
        </button>
      );
    })
    : "-";
}

export default App;