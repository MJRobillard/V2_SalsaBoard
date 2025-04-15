import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import { danceTreeData } from "../data/salsaMoveData";
import DanceTree from "../components/DanceTree";
import SalsaMindMap from "../components/SalsaMindMap";
const instagramPosts = [
  "https://www.instagram.com/p/DGhIT-2Jpn8/",
  "https://www.instagram.com/p/DGen6khJb1u/",
  'https://www.instagram.com/share/BAE8X9LPzo',
'https://www.instagram.com/share/BAOK_vt6qX',
'https://www.instagram.com/share/BANj-Ed-jY',
'https://www.instagram.com/share/BAelkGcyJ0',
];

const Staff = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Spring 2025 Salsa Board">
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🕺 Dance Explorer</h1>
        <DanceTree data={danceTreeData} />
    </div>
    <div>

      <SalsaMindMap></SalsaMindMap>
    </div>
      <Box w="100vw" mb={8} className="darkModeContainer">
        <Container maxW="container.lg">
          <Text textStyle="title2">Spring 2025 Salsa Board</Text>

          <SimpleGrid columns={[1, null, 2]} spacing={[12, 16]}>
            {instagramPosts.map((url, index) => (
              <InstagramEmbed key={index} url={url} width="100%" />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Staff;
