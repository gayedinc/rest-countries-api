import { useState } from "react";
import { data } from "./assets/data/data.jsx";

function App() {
  const [showDetails, setShowDetails] = useState(false); // Detay sayfasını kontrol eden state
  const [selectedCountry, setSelectedCountry] = useState(null); // Tıklanan ülkeyi saklayan state

  function handleCountryClick(country) {
    setSelectedCountry(country);
    setShowDetails(true); // Detay sayfasını göster
  }

  function HandleBackClick() {
    setShowDetails(false);
  }

  return (
    <div>
      {showDetails ? (
        <>
          <Header />
          <CountryDetails country={selectedCountry} onBackClick={HandleBackClick} />
        </>
      ) : (
        <>
          <Header />
          <Input />
          <CountryContent onCountryClick={handleCountryClick} />
        </>
      )}
    </div>
  );
}

// tema değişikliği için;
function ChangeTheme() {
  if (document.body.classList.contains('darkMode')) {
    document.body.classList.remove('darkMode');
  }
  else {
    document.body.classList.add('darkMode');
  }
}

function Header() {
  return (
    <>
      <div className="header">
        <h1>Where in the world?</h1>
        <button onClick={ChangeTheme}>
          <img src="/img/moon-icon-countries.svg" alt="Search Icon" />
          Dark Mode
        </button>
      </div>
    </>
  )
}

function Input() {
  return (
    <>
      <div className="input-area">
        <div className="input">
          <img src="/img/search-icon.svg" alt="Search Icon" />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="select-area">
          <select className="regions">
            <option value="filter">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
}

function CountryContent({ onCountryClick }) {
  const dataItems = data.map(x => <Countries
    key={x.cca3}
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

function CountryDetails({ country, onBackClick }) {
  if (!country) return null; // Eğer seçilen ülke yoksa render etme

  return (
    <>
      <div className="country-details">
        <button onClick={onBackClick}>
          <img src="/img/back-icon.svg" alt="Back Icon" />
          Back
        </button>
        <div className="card-details">
          <img src={country.flags.png} alt={country.name} />
          <div className="card-detail-first">
            <h1>{country.name.common}</h1>
            <h3>{country.name.official}</h3>
            <p><strong>Population:</strong>{country.population}</p>
            <p><strong>Region:</strong>{country.region}</p>
            <p><strong>Sub Region:</strong>{country.subregion ? country.subregion : "-"}</p>
            <p><strong>Capital:</strong> {country.capital.join(", ")}</p>
          </div>
          <div className="card-detail-second">
            <p><strong>Top Level Domain:</strong> {country.tld.join(", ")}</p>
            <p><strong>Currencies: </strong>{Object.values(country.currencies)
              .map((x) => x.name)
              .join(", ")}</p>
            <p><strong>Languages: </strong>{Object.values(country.languages).join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;