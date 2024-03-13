import { Box, Container } from "@mui/material";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Container sx={{padding:2}}>
      <Box display="flex" flexDirection="column" alignItems="center" >
        <Search/>
        <CardList/>
      </Box>
    </Container>
  );
}

export default App;
