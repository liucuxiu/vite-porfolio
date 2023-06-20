import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={`"nav main"`}
      gridTemplateColumns={'500px 1fr'}
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
    </Grid>
  )
}

export default App
