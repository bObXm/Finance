import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { CompanyProfile } from '../../dtos';

type Props={
  data:CompanyProfile
}

const RatioList : React.FC <Props> = ({data}):JSX.Element => {

  return (
    <Accordion sx={{margin:4}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight={'bold'}>{data.companyName} Info:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <b>CEO:</b> {data.ceo}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          <b>Industry:</b> {data.industry}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          <b>Sector:</b> {data.sector}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          <b>Phone:</b> {data.phone}      
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          <b>Website:</b> {data.website}      
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default RatioList