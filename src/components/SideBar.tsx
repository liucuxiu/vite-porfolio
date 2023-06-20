import { Box, VStack, Text, Image } from '@chakra-ui/react';
import { FiHome, FiUser } from 'react-icons/fi';
import MenuItem from './MenuItem';
import avatar from '../assets/avatar.jpg';

const SideBar = () => {
  return (
    <Box bg="gray.200" p={4} borderRight="1px" borderColor="gray.300">
      <VStack spacing={4} align="flex-start" alignItems="center">
        <VStack paddingBottom={20} paddingTop={20}>
          <Image src={avatar} boxSize="100px" borderRadius="full"/>
          <Text fontWeight="bold" fontSize="3xl">Minh Tu Phan</Text>
        </VStack>
        <VStack>
          <MenuItem icon={FiHome} label="Home"/>
          <MenuItem icon={FiUser} label="About"/>
          <MenuItem icon={FiUser} label="About"/>
          <MenuItem icon={FiUser} label="About"/>
        </VStack>


      </VStack>
    </Box>



  )
}

export default SideBar