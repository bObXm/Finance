import { Box, Button, Container } from "@mui/material";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Container sx={{ padding: 2 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Search />
        <CardList />
      </Box>
    </Container>
  );
}

export default App;
