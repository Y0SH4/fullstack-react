import type { NextPage } from 'next';
import { Container, Box } from '@chakra-ui/react';
import { Navbar } from 'components';

const Home: NextPage = () => {
  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default Home;
