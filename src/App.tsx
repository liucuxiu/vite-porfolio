import { Box, Grid } from '@chakra-ui/react';
import SideBar from './components/SideBar';

function App() {
  return (
    <Grid templateColumns="500px 1fr" h="100vh">
      <SideBar/>
      <Box>
        Main
      </Box>
    </Grid>
  )
}

export default App
