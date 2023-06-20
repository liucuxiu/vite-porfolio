import { Box } from '@chakra-ui/react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';

const Content = () => {
  return (
    <Box marginLeft="500px" width='full'>
      <Home/>

      <About/>

      <Contact/>

      <Experience/>

    </Box>
  )

}

export default Content