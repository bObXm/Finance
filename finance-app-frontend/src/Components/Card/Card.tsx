import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { searchCompanies } from '../../api';


type Props={
    companyName: string,
    ticker:string,
    price:number
}


const CardInfo : React.FC<Props>= ({companyName, ticker, price}): JSX.Element=> {
  return (
    <Card sx={{ maxWidth: 345, margin:2 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1527942364978-2b826fc00de6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlcHRpbGV8ZW58MHx8MHx8fDA="
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {companyName} ({ticker})
        </Typography>
        <p>${price}</p>
        <Typography variant="body2" color="text.secondary">
          {ticker} are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardInfo