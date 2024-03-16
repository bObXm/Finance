import axios from "axios";
import { CompanySearch } from "./dtos";

type SearchResponse={
    data:CompanySearch[]
}

export const searchCompanies = async (query:string)=> {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error)){
      console.error("Axios error: ", error.response?.data?.message || error.message)
    }else{
      console.error("Unexpected error: ", error)
    }
  }
};
