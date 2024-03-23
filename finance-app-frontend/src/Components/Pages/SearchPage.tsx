import React from "react";
import { useState } from "react";
import { CompanySearch } from "../../dtos";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import Portofolio from "../Portofolio/Portfolio";
import { Container } from "@mui/material";


const SearchPage:React.FC = ():JSX.Element => {

    const [portfolio, setPortfolio] = useState<CompanySearch[]>([]);

    const addToPortfolio = (stock: CompanySearch) => {
      setPortfolio((currentPortofolio) => {
        if (!currentPortofolio.some((p) => p.symbol === stock.symbol)) {
          return [...currentPortofolio, stock];
        }
        return currentPortofolio;
      });
    };
  
    const deleteStock = (symbol: string) => {
      setTimeout(() => {
        setPortfolio(portfolio.filter((el) => el.symbol !== symbol));
      }, 300);
    };
  

  return (
    <Container sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <Search />
      <CardList addToPortfolio={addToPortfolio} />
      <Portofolio stocks={portfolio} deleteStock={deleteStock} />
    </Container>
  );
};

export default SearchPage;
