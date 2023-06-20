import { As, Box, Text } from '@chakra-ui/react';

interface MenuItemProps {
  icon: As;
  label: string;
}

const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <Box display="flex" alignItems="center" padding="10px">
      <Box as={icon} boxSize={6}/>
      <Text ml={2}>{label}</Text>
    </Box>
  )
}

export default MenuItem