import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { TestDataCompany } from '../Table/testData';

const RatioList : React.FC = ():JSX.Element => {

    let data=TestDataCompany
    console.log(data);
    

  return (
    <Accordion sx={{margin:4}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'bold'}>{data[0].companyName} Info:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Price: {data[0].price}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          Website: {data[0].website}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default RatioList