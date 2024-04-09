import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { CompanySearch } from "../../dtos";
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { Link } from "react-router-dom";


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
  const imageUrl = `https://financialmodelingprep.com/image-stock/${symbol}.png`;

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Link to={`/company/${symbol}`}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {name} ({symbol}) <CandlestickChartIcon fontSize="large" color="success"/>
          </Typography>
          </Link>
          <p>${currency}</p>
          <Typography variant="body2" color="text.secondary">
            {exchangeShortName} - {stockExchange}
          </Typography>
        
          <Button
            sx={{ display: "flex", justifyContent: "center", marginTop: 3, fontWeight: 'bold' }}
            variant="outlined"
            endIcon={<ShowChartIcon/>}
            onClick={()=>{addToPortfolio(stock)}}
          >
            Add Stock
          </Button>
        </CardContent>
      
    </Card>
  );
};

export default CardInfo;
