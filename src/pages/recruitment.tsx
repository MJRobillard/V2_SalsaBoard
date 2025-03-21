import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Box, Text, Container } from "@chakra-ui/react";
import RecruitingResources from "../data/markdown/recruiting-resources.mdx";
import DevResources from "../data/markdown/dev-resources.mdx";
import PastIterations from "../data/markdown/past-iterations.mdx";

const Resources = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Box w="100vw" className="darkModeContainer">
        <Container maxW="container.lg" mb={20}>
          <Text textStyle="title2">Recruitment</Text>
          <Text textStyle="subtitle1" mb={4}>
            Stuff 
          </Text>
          
        </Container>
      </Box>
    </Layout>
  );
};

export default Resources;
