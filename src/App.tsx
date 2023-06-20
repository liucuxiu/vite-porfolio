import { Grid } from '@chakra-ui/react';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {

  return (
    <Grid display="flex" >
      <SideBar />
      <Content/>
    </Grid>
  )
}

export default App
