import React from "react";
import { CompanySearch } from "../../dtos";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  stock: CompanySearch;
  deleteStock: (symbol: string)=>void
};

const CardPortfolio: React.FC<Props> = ({ stock, deleteStock}) => {
  const { exchangeShortName, name, stockExchange, symbol } = stock;

  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {exchangeShortName} - {stockExchange}
        </Typography>
        <Typography variant="h5" component="div">
          {name} ({symbol})
          <IconButton aria-label="delete" color="error" onClick={()=>{deleteStock(symbol)}}>
            <DeleteIcon />
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardPortfolio;
