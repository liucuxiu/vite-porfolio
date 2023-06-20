import { Box, Grid } from '@chakra-ui/react';
import SideBar from './components/SideBar';

function App() {

  return (
    <Grid display="flex" >
      <SideBar />
      <Box marginLeft="500px">
        <section id="home" style={{ height: '1000px' }}>
          home
        </section>
        <section id="about" style={{ height: '1000px' }}>
          about
        </section>
        <section id="experience" style={{ height: '1000px' }}>
          experience
        </section>
        <section id="contact" style={{ height: '1000px' }}>
          contact
        </section>
      </Box>
    </Grid>
  )
}

export default App
