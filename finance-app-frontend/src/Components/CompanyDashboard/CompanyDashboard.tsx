import { Box, Grid } from '@mui/material'
import Tile from '../Tile/Tile';
import CompanyProfile from '../CompanyProfile/CompanyProfile';
import React from 'react';
import IncomeStatement from '../IncomeStatement/IncomeStatement';
import { CompanyProfile as CompanyProfileInfo } from "../../dtos";
import BalanceSheet from '../BalanceSheet/BalanceSheet';
import CashflowStatement from '../CashflowStatement/CashflowStatement';


type CompanyDashboardProps ={
  activeSection: string;
  company:CompanyProfileInfo[]
}

const CompanyDashboard: React.FC<CompanyDashboardProps> = ({activeSection, company }):JSX.Element => {
  let ContentComponent: React.ReactNode = null

  let data= company[0]

  switch(activeSection){
    case 'profile':
      ContentComponent=<CompanyProfile />
    break;
    case 'incomeStatement':
      ContentComponent=<IncomeStatement data={data}/>
    break;
    case'balanceSheet':
      ContentComponent=<BalanceSheet/>
    break;
    case 'cashflowStatement':
      ContentComponent=<CashflowStatement/>
    break;
  }

  return (
    <Box sx={{ ml: { md: '64px' }, bg: 'blueGray.100', width: '100%' }}>
      <Box sx={{ pt: '20px', pb: '32px', bg: 'lightBlue.500' }}>
        <Box sx={{ px: { xs: 4, md: 6 }, mx: 'auto', width: '100%' }}>
          <Grid container spacing={4}>
            {[
              { title: 'City', value: data.city },
              { title: 'Price', value: data.price+' $' },
              { title: 'IPO Date', value: data.ipoDate.split('-').reverse().join('-') },
              { title: 'Full Time Employees', value: data.fullTimeEmployees },
            ].map((data) => (
              <Tile data={data} key={data.value}/>
            ))}
          </Grid>
        </Box>
      </Box>
      {ContentComponent}
    </Box>
  );
}

export default CompanyDashboard