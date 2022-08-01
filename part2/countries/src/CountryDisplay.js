const CountryDisplay = (props) => {
    console.log(props)
    const countryName = props.countryToDisplay.name.common
    const capital = props.countryToDisplay.capital[0]
    const area = props.countryToDisplay.area
    const languages = props.countryToDisplay.languages
    const flagUrl = props.countryToDisplay.flags.png
    const lat = props.countryToDisplay.latlng[0]
    const long = props.countryToDisplay.latlng[1]
    console.log(languages)
    console.log(process.env.REACT_APP_API_KEY)
    
    return (
        <div>
            <h1>{countryName}</h1>
            <div>capital: {capital}</div>
            <div>area: {area}</div>
            <h2>languages:</h2>
            <ul>
                {Object.keys(languages).map((key, i) => 
                    <li key={i}>
                        {languages[key]}
                    </li>
                )
                }
            </ul>
            <img src={flagUrl}/>
        </div>
    )
}

export default CountryDisplay