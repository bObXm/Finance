import { createContext, useState, useContext } from 'react';
import { searchCompanies } from './api';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError]= useState(null)

  const performSearch = async (query) => {
    try {
      const results = await searchCompanies(query);
      setSearchResults(results);
      setError(null); 
    } catch (error) {
      console.error('Error performing search:', error);
      setError(error)
    }
  };

  return (
    <SearchContext.Provider value={{ searchResults, performSearch, error }}>
      {children}
    </SearchContext.Provider>
  );
};
