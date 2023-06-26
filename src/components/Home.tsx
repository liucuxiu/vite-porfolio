import { Box, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';
import '../styles/home.css'
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  return (
    <Box height={1000} id="home" paddingLeft={200} width={1000}>
      <Fade direction="down" triggerOnce={true}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}>
            Hi, my name is Liucuxiu <br/>
            <Text as={"p"} color="#f86767">
              I'm a software engineer
            </Text>
          </Heading>
          <HStack
            fontSize={"2xl"}
            spacing={5}
            alignSelf={"center"}>
            <Link href="https://www.linkedin.com/in/liucuxiu/" _hover={{ color: '#f86767' }}>
              <CiLinkedin/>
            </Link>
            <Link href="https://github.com/liucuxiu" _hover={{ color: '#f86767' }}>
              <AiFillGithub/>
            </Link>
            <Link href="mailto:xliucuxiux@gmail.com" _hover={{ color: '#f86767' }}>
              <CiMail/>
            </Link>
          </HStack>
        </Stack>
      </Fade>

    </Box>
  )
}

export default Home