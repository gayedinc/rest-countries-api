import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Header({ handleChangeTheme }) {
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
    </>
  )
}