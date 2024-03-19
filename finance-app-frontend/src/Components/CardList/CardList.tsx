import React from "react";
import CardInfo from "../Card/Card";
import Alert from '@mui/material/Alert';
import { useSearch } from "../SearchContext";
import { CompanyProfile } from "../../dtos";

const CardList: React.FC = (): JSX.Element => {
  const { searchResults } = useSearch();

  return (
    <div>
      {
        !searchResults ? <Alert sx={{marginTop:2}} severity="info">Seach for a company ticker symbol</Alert>:
        searchResults.map((el:CompanyProfile)=>{
         return <CardInfo key={el.symbol} companyName={el.companyName} ticker={el.symbol} price={el.price} />
        })
      }
      <CardInfo companyName="ceva" ticker="tsla" price={100} />
      <CardInfo companyName="xxxx" ticker="neo" price={200} />
    </div>
  );
};

export default CardList;
