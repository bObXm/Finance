import axios from "axios";
import { CompanySearch } from "./dtos";

type SeacrchResponse={
    data:CompanySearch[]
}

export const searchCompanies = async (query:string)=> {
  try {
    const response = await axios.get<SeacrchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error:any) {
    console.log(error.message);
  }
};
