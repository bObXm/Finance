import React from 'react'
import { CompanySearch } from '../../dtos'
import { Box } from '@mui/material'


type PortfolioProps ={
    stocks: CompanySearch[]
}

const Portofolio : React.FC<PortfolioProps> = ({stocks}) : JSX.Element => {
  console.log(stocks)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {stocks.map((stock) => (
        <p key={stock.symbol}>aici vine CardInfo</p>
      ))}
    </Box>
  )
}

export default Portofolio