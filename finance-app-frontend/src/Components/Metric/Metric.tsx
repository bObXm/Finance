import { AccordionDetails, CircularProgress, SvgIconTypeMap, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent';

type Metric={
    value: number | null ,
    title : string,
    description: string,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const Metric: React.FC<Metric> = ({title, value, description, Icon }):JSX.Element => {

  return (
    <AccordionDetails>
    <Typography>
      {title}: {value !== null ? value : <CircularProgress color="success" />}
      <Tooltip title={description} placement="right" sx={{marginLeft:2}}>
        <Icon  />
      </Tooltip>
    </Typography>
  </AccordionDetails>
  )
}

export default Metric