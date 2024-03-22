import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSearch } from "../SearchContext";

const Search: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const {performSearch}=useSearch()

  return (
    <Box display="flex">
      <TextField
        id="outlined-basic"
        label="Search companies"
        variant="outlined"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button variant="contained" sx={{ margin: 1 }} onClick={()=>{performSearch(search)}}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
