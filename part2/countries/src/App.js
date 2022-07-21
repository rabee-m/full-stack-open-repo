import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [newFilter, setNewFilter] = useState('');
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const [countries_data, setCountries] = useState([]);

  useEffect(()=> {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])

    //map countries to countrie names
    const countriesNames = countries_data.map(entry => entry.name.common)
    //const countriesToShow = newFilter ==
  return (
    <div>
      find countries
      <input value={newFilter}
      onChange={handleFilterChange}/>
    </div>
  );
}

export default App;
