import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Filter'
import CountryList from './CountryList';

function App() {
  const [newFilter, setNewFilter] = useState('');
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const [countriesData, setCountries] = useState([]);

  useEffect(()=> {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])

    //map countries to countrie names
    const countriesNames = countriesData.map(entry => entry.name.common)
    const countriesToShow = newFilter === ''
    ? countriesData
    : countriesData.filter(country => country.name.common.toLowerCase().startsWith(newFilter.toLowerCase()))
    //const countriesToShow = newFilter ==

  return (
    <>
    <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
    <CountryList countriesToShow={countriesToShow}/>
    </>
  );
}

export default App;
