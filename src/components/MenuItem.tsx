import { As, Box, HStack } from '@chakra-ui/react';
import { Link as Scrollink } from 'react-scroll';

interface MenuItemProps {
  icon: As;
  label: string;
  to: string;
}

const MenuItem = ({ icon, label, to }: MenuItemProps) => {
  return (
    <Box display="flex"
         alignItems="center"
         padding="10px"
         fontSize={18}
         _hover={{ color: '#f86767'}}>
      <HStack>
        <Box as={icon} boxSize={6} />
        <Scrollink to={to}>
          {label}
        </Scrollink>
      </HStack>

    </Box>
  )
}

export default MenuItem