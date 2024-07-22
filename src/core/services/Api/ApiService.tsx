import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "@core/constants/Constants";
import { Drinks } from "@core/models/Drinks";
import { Drink } from "@core/models/Drink";

const useFetch = (endpoint: String, query: {}) => {
  const baseUrl = BASE_URL;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `${baseUrl}${endpoint}`,
    params: { ...query },
  };

  console.log(endpoint);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      if (response.status === 200) {
        setData(response.data.drinks);

        setIsLoading(false);
      }
    } catch (error: any) {
      setError(error);
      alert("error!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export const useFetch1 = async (endpoint: string, query: {}) => {
  const api = axios.create({ baseURL: BASE_URL });

  try {
    const { data } = await api.get(endpoint, { params: { ...query } });
    return { error: null, data };
  } catch (error) {
    return { error, data: null };
  }
};

export default useFetch;
