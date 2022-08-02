import CountryDisplay from "./CountryDisplay"

const CountryList = ({countriesToShow}) => {
    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
        } else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
            return (
                <div>
                    <ul>
                        {countriesToShow.map((country, i) => 
                        <li key={i}>
                            {country.name.common}
                        </li>
                        )}
                    </ul>
                </div>
            )
        } else if (countriesToShow.length == 1) {
            const countryToDisplay = countriesToShow[0]
            return (
                <div>
                    <CountryDisplay countryToDisplay={countryToDisplay}/>
                </div>
            )
        } else {
            return (
            <div>
                No countries found, try another filter
            </div>
            )
        }
}

export default CountryList