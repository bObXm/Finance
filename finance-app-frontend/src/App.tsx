import { Box, Container } from "@mui/material";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { SearchProvider } from "./Components/SearchContext";
import { useState } from "react";
import Portofolio from "./Components/Portofolio/Portofolio";
import { CompanySearch } from "./dtos";

function App() {
const[portfolio, setPortfolio]=useState<CompanySearch[]>([])

const addToPortfolio = (stock:CompanySearch) => {
  setPortfolio((currentPortfolio) => {
    if (!currentPortfolio.some((p) => p.symbol === stock.symbol)) {
      return [...currentPortfolio, stock];
    }
    return currentPortfolio;
  });
};

// console.log(portfolio)

  return (
    <SearchProvider>
      <Container sx={{ padding: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Search />
          <CardList addToPortfolio={addToPortfolio}/>
          <Portofolio stocks={portfolio}/>
        </Box>
      </Container>
    </SearchProvider>
  );
}

export default App;
