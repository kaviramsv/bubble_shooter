import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Route, Routes, useNavigate, Link } from "react-router-dom";
const Home = () => {

  const navigate = useNavigate();
  return (
    <>
      <Box background={"pink"} height={100}>
        <HStack>
        <Link to="/how"><Text fontSize={"2xl"} >How  |</Text> </Link>
        <Link to="/about"><Text fontSize={"2xl"}>About |</Text></Link>
        <Link to="/game"><Text fontSize={"2xl"}>Game </Text></Link>
        </HStack>
      </Box>

      <Box  background={"blackAlpha.700"} >
      <Outlet />
      </Box>
    </>
  )
};

export default Home;
