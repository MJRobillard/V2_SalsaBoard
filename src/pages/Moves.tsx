import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import { danceTreeData } from "../data/salsaMoveData";
import DanceTree from "../components/DanceTree";
import SalsaMindMap from "../components/SalsaMindMap";

const Moves = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Some moves to practice!">


      <Box w="80vw" mb={8} className="darkModeContainer">
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🕺 Dance Explorer</h1>
        <DanceTree data={danceTreeData} />
    </div>
    <div>

      <SalsaMindMap></SalsaMindMap>
    </div>
      </Box>
    </Layout>
  );
};

export default Moves;
