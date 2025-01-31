export default function Countries({ name, img, population, region, capital, onCountryClick }) {

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