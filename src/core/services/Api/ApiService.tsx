import axios from "axios";
import BASE_URL from "@core/constants/Constants";

export const axiosFetch = async (endpoint: string, query: {}) => {
  const api = axios.create({ baseURL: BASE_URL });

  try {
    const { data } = await api.get(endpoint, { params: { ...query } });
    return { error: null, data };
  } catch (error) {
    return { error, data: null };
  }
};

export default axiosFetch;
