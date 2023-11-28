import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { fetchCountries } from '../store/country/countrySlice';

const CountryList: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.country.countries);
  const status = useSelector((state: RootState) => state.country.status);
  const error = useSelector((state: RootState) => state.country.error);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            <strong>{country.name.common}</strong> - {country.capital} (Population: {country.population})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
