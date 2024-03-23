import { Box, Container } from "@mui/material";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { SearchProvider } from "./Components/SearchContext";
import { useState } from "react";
import Portofolio from "./Components/Portofolio/Portfolio";
import { CompanySearch } from "./dtos";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
const[portfolio, setPortfolio]=useState<CompanySearch[]>([])

const addToPortfolio = (stock:CompanySearch) => {
  setPortfolio((currentPortofolio) => {
    if (!currentPortofolio.some((p) => p.symbol === stock.symbol)) {
      return [...currentPortofolio, stock];
    }
    return currentPortofolio;
  });
};

const deleteStock=(symbol:string)=>{
  setTimeout(() => {
    setPortfolio(portfolio.filter(el=>el.symbol!==symbol))
  }, 300);
}

  return (
    <SearchProvider>
      <Navbar/>
      <Hero/>
      <Container sx={{ padding: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Search/>
          <CardList addToPortfolio={addToPortfolio}/>
          <Portofolio stocks={portfolio} deleteStock={deleteStock}/>
        </Box>
      </Container>
    </SearchProvider>
  );
}

export default App;
