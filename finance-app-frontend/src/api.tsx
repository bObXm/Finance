import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./dtos";

export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error: ",
        error.response?.data?.message || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

export const getCompanyProfie = async (query: string) => {
  try {
    const response = await axios.get<CompanyProfile[]>(`
    https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error: ",
        error.response?.data.message || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

export const getKeyMetrics = async (query: string) => {
  try{
    const response= await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`);
    return response.data
  }catch(error){
    if(axios.isAxiosError(error)){
      console.error("Axios error:", error.response?.data.message || error.message)
    }else{
      console.error("Unexpected error:", error)
    }
  }
};

export const getIncomeStatement = async (query : string) => {
  try{
    const response= await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`)
    return response.data
  }catch(error){
    if(axios.isAxiosError(error)){
      console.error("Axios error:", error.response?.data.message || error.message)
    }else{
      console.error("Unexpected error:", error)
    }
  }
}

export const getBalanceSheet = async (query : string) =>{
  try{
    const response = await axios.get<CompanyBalanceSheet[]>(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`)
    return response.data
  }catch(error){
    if(axios.isAxiosError(error)){
      console.error("Axios error:", error.response?.data.message || error.message)
    }else{
      console.error("Unexpected error:", error)
    }
  }
}

export const getCashFlow = async (query : string) =>{
  try{
    const response= await axios.get<CompanyCashFlow[]>(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${process.env.REACT_APP_API_KEY}`)
    return response.data
  }catch(error){
    if(axios.isAxiosError(error)){
      console.error("Axios error:", error.response?.data.message || error.message)
    }else{
      console.error("Unexpected error:", error)
    }
  }
}

export const getTenK = async (query : string) => {
  try{
    const response = await axios.get<CompanyTenK[]>(`https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${process.env.REACT_APP_API_KEY}`)
    return response.data
  }catch(error){
    if(axios.isAxiosError(error)){
      console.error("Axios error:", error.response?.data.message || error.message)
    }else{
      console.error("Unexpected error:", error)
    }
  }
}