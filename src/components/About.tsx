import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';

import avatar from '../assets/avatar.jpg';

const About = () => {
  return (
    <Box height={1000} id="about" paddingTop={200} paddingLeft={200} width={1000}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={avatar}
          alt='liucuxiu'/>

        <Stack>
          <CardBody>
            <Heading size='md'>Hi 👋, I'm Liucuxiu</Heading>

            <Text py='2'>
              As a software engineer with ERP, e-commerce, payments and fintech experience,
              I'm passionate about delivering high-quality systems that give my clients the power to manage their
              businesses more effectively.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' bgColor="#f86767" color="white">
              Download CV
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  )
}

export default About