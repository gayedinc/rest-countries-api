import { useContext } from "react";
import { ThemeContext } from "../App";
import { DataContext } from "../App";

export function Input({ setCountry, setRegion }) {
  const { data } = useContext(DataContext);

  const regions = Array.from(new Set(data.map(x => x.region)));

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

export function Header({ handleChangeTheme, setCountry, setRegion, showDetails }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="header">
        <h1>Where in the world?</h1>
        <button className="dark-mode-btn" onClick={handleChangeTheme}>
          <img src={theme === "light" ? "/img/light-moon-icon.svg" : "/img/dark-moon-icon.svg"} alt="Moon Icon" />
          Dark Mode
        </button>
      </div>
      {!showDetails && <Input
        setCountry={setCountry}
        setRegion={setRegion}
      />}

    </>
  )
}