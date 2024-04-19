import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSearch } from "../../SearchContext";

const Search: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const {performSearch}=useSearch()

  return (
    <Box display="flex">
      <TextField
        id="outlined-basic"
        label="Search companies"
        variant="outlined"
        color="warning"
        InputLabelProps={{style: { fontWeight: 'bold' }}}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
       
      />
      <Button variant="contained" sx={{ margin: 1, fontWeight: 'bold',  backgroundColor: '#4caf50', '&:hover': {backgroundColor: '#388e3c' } }} onClick={()=>{performSearch(search)}}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
