import { Box, VStack, Text, Image } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import avatar from '../assets/avatar.jpg';
import { CiCircleList, CiHome, CiMail, CiUser } from 'react-icons/ci';

const SideBar = () => {
  return (
    <Box bg="#f9f9fe" p={4} borderRight="1px" borderColor="gray.300" pos="fixed" h="full"
         width="500px">
      <VStack spacing={4} align="flex-start" alignItems="center">
        <VStack paddingBottom={20} paddingTop={20}>
          <Image src={avatar} boxSize="100px" borderRadius="full"/>
          <Text fontWeight="bold" fontSize="3xl">Minh Tu Phan</Text>
        </VStack>
        <VStack alignItems="left">
          <MenuItem icon={CiHome} label="Home" to="home"/>
          <MenuItem icon={CiUser} label="About" to="about"/>
          <MenuItem icon={CiCircleList} label="Experience" to="experience"/>
          <MenuItem icon={CiMail} label="Contact" to="contact"/>
        </VStack>

      </VStack>
    </Box>



  )
}

export default SideBar