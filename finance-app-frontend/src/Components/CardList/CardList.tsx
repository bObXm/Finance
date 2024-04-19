import React, { SyntheticEvent } from "react";
import CardInfo from "../Card/CardInfo";
import Alert from '@mui/material/Alert';
import { useSearch } from "../SearchContext";
import { CompanySearch } from "../../dtos";
const { v4: uuidv4 } = require('uuid');

const CardList: React.FC<{ addToPortfolio: (stock: CompanySearch) => void }> = ({addToPortfolio}): JSX.Element => {
  const { searchResults } = useSearch();

  return (
    <div>
      {!searchResults ? (
        <Alert sx={{ marginTop: 2 }} severity="info">Search for a company ticker symbol</Alert>
      ) : (
        searchResults.map((el: CompanySearch) => (
          <CardInfo key={uuidv4()} name={el.name} symbol={el.symbol} currency={el.currency} id={el.symbol} exchangeShortName={el.exchangeShortName} stockExchange={el.stockExchange} addToPortfolio={addToPortfolio}/>
        ))
      )}
    </div>
  );
};

export default CardList;
