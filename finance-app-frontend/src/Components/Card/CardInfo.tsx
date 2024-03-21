import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { CompanySearch } from "../../dtos";


type Props = {
  id:string,
  name: string;
  symbol: string;
  currency: string;
  exchangeShortName:string;
  stockExchange:string,
  addToPortfolio:(stock:CompanySearch)=>void
};

const CardInfo: React.FC<Props> = ({
  id,
  name,
  symbol,
  currency,
  exchangeShortName,
  stockExchange,
  addToPortfolio 
}): JSX.Element => {

  const stock = { id, name, symbol, currency, exchangeShortName, stockExchange };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1527942364978-2b826fc00de6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlcHRpbGV8ZW58MHx8MHx8fDA="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} ({symbol})
          </Typography>
          <p>${currency}</p>
          <Typography variant="body2" color="text.secondary">
            {exchangeShortName} - {stockExchange}
          </Typography>
        
          <Button
            sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}
            variant="outlined"
            endIcon={<ShowChartIcon />}
            onClick={()=>{addToPortfolio(stock)}}
          >
            Add Stock
          </Button>
        </CardContent>
      
    </Card>
  );
};

export default CardInfo;
