import { useState, useEffect } from 'react';
import { DecisionFormData, DecisionResponse } from '../../@types';

export const useDecisionSystem = (
  url: string,
  params: DecisionFormData,
  isFormDataReady: boolean,
) => {
  const [data, setData] = useState<DecisionResponse>();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      if (!isFormDataReady) return;

      setIsPending(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(params),
        });
        console.log(response.status);
        // if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError('');
      } catch (error) {
        // console.log(error);
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url, params]);
  return { data, isPending, error };
};
