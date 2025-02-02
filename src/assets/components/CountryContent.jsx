import Countries from "./Countries.jsx";
import { useContext } from "react";
import { DataContext } from "../../App";

export default function CountryContent({ country, region, onCountryClick }) {

  const { data } = useContext(DataContext);

  const dataItems = data
    .filter(x => x.name.common.toLowerCase().includes(country) && x.region.includes(region))
    .map(x => <Countries
      key={x.name.common}
      name={x.name.common}
      population={x.population}
      region={x.region}
      capital={x.capital}
      img={x.flags.png}
      // {...x}
      onCountryClick={() => onCountryClick(x)} />)

  return (
    <>
      <div className="countries">
        <div className="country-list">{dataItems}</div>
      </div>
    </>
  )
}