import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

type Props = {
    data:{
        title: string,
        value: string
    }
    
};

const Tile: React.FC<Props> = ({data}): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} lg={3} key={data.title}>
        <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', borderRadius: 'lg', mb: 6, boxShadow: 'lg', backgroundColor: '#eceff1' }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '0.75rem' }}>
                {data.title}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                {data.value}
            </Typography>
        </Paper>
    </Grid>
  )
}

export default Tile