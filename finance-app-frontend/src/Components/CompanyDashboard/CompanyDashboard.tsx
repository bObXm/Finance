import { Box, Grid } from '@mui/material'
import Tile from '../Tile/Tile';
import CompanyProfile from '../CompanyProfile/CompanyProfile';
import React from 'react';
import IncomeStatement from '../IncomeStatement/IncomeStatement';

type CompanyDashboardProps ={
  activeSection: string;
}

const CompanyDashboard: React.FC<CompanyDashboardProps> = ({activeSection }):JSX.Element => {
  let ContentComponent: React.ReactNode = null

  switch(activeSection){
    case 'profile':
      ContentComponent=<CompanyProfile />
      break;
    case 'incomeStatement':
      ContentComponent=<IncomeStatement />
      break;
  }



  return (
    <Box sx={{ ml: { md: '64px' }, bg: 'blueGray.100', width: '100%' }}>
      <Box sx={{ pt: '20px', pb: '32px', bg: 'lightBlue.500' }}>
        <Box sx={{ px: { xs: 4, md: 6 }, mx: 'auto', width: '100%' }}>
          <Grid container spacing={4}>
            {[
              { title: 'Traffic', value: '350,897' },
              { title: 'NEW USERS', value: '2,356' },
              { title: 'SALES', value: '924' },
              { title: 'PERFORMANCE', value: '49,65%' },
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