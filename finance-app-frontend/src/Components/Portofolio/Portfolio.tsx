import React from 'react'
import { CompanySearch } from '../../dtos'
import { Box } from '@mui/material'
import CardPortofolio from '../CardPortofolio/CardPortfolio'


type PortfolioProps ={
  stocks: CompanySearch[]
  deleteStock:(symbol: string)=>void
}

const Portfolio : React.FC<PortfolioProps> = ({stocks, deleteStock}) : JSX.Element => {
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>My Portofolio</h3>
      {stocks.length>0 && stocks.map(stock => {
       return <CardPortofolio key={stock.symbol} stock={stock} deleteStock={deleteStock}/>
      }
      )}
    </Box>
  )
}

export default Portfolio