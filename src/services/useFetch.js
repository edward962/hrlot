import React, { useEffect, useState } from 'react';

export default function useFetch(url, mtd, bd ) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(process.env.REACT_APP_API_URL + url, {headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json'
      }, method : mtd});
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
}