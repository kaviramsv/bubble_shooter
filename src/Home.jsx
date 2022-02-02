import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Route, Routes, useNavigate, Link } from "react-router-dom";
const Home = () => {

  const navigate = useNavigate();
  return (
    <>
      <Box background={"pink.600"} height={100}>
        <HStack pt={"20px"}>
        <Link to="/how"><Text fontSize={"4xl"} fontweight={"bold"} color={"white"}>How  |</Text> </Link>
        <Link to="/about"><Text fontSize={"4xl"} fontweight={"bold"} color={"white"}>About |</Text></Link>
        <Link to="/game"><Text fontSize={"4xl"} fontweight={"bold"} color={"white"}>Game </Text></Link>
        </HStack>
      </Box>

      <Box  background={"blackAlpha.700"} >
      <Outlet />
      </Box>
    </>
  )
};

export default Home;
