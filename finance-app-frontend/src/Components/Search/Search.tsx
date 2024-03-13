import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Search :React.FC= () :JSX.Element => {
    const [search, setSearch]=useState<string>('')
    console.log(search)

  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{mb:5}} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
  )
}

export default Search