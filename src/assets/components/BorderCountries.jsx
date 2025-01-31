import { useContext } from "react";
import { DataContext } from "../../App";

export default function BorderCountries({ borders, onClickBorderCountry }) {

  const { data } = useContext(DataContext);

  return borders ?
    borders.map((x) => {
      const countryData = data.find((y) => y.cca3 === x);
      return (
        <button onClick={() => onClickBorderCountry(countryData)} key={x} className="borderBtn">
          {countryData.name.common}
        </button>
      );
    })
    : "";
}