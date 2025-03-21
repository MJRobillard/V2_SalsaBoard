/**
 * Introduction
 *
 * This is the main entry point of the project, responsible for rendering the home page.
 * It uses the Schedule component to display the course schedule and the WeekCard component to display each week's information.
 *
 * The Schedule component is located in the `data/schedule.ts` file and contains the course schedule data.
 * The WeekCard component is located in the `components/WeekCard.tsx` file and is responsible for rendering a single week's information.
 *
 * To maintain and update the code, you can modify the schedule data in the `data/schedule.ts` file.
 * You can also update the WeekCard component to change the way each week's information is displayed.
 *
 * @example
 * To add a new week to the schedule, simply add a new object to the `weeks` array in the `data/schedule.ts` file.
 * To update the WeekCard component, modify the `WeekCard.tsx` file.
 */

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import WeekCard from "../components/WeekCard";
import schedule from "../data/schedule";
import { Image, Container, Box, Text, Link } from "@chakra-ui/react";
import fullStackLogoPath from "@site/static/img/logo.jpg";
import { useColorMode } from "@docusaurus/theme-common";
import { backgroundGradient } from "../data/styles";
import React from "react";
import Calendar from "../components/Calendar";

/**
 * HomeContent component
 *
 * This component renders the home page content, including the course title, schedule, and WeekCard components.
 *
 * @returns {JSX.Element} The home page content.
 */
const HomeContent: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box background={backgroundGradient(colorMode)}>
        <Container maxW="container.md" my="6rem">
          <Text textStyle="title1">
          <Image
            src={fullStackLogoPath}
            mr={4}
            mb={-4}
            style={{ borderRadius: '50%' }}
          />            
          <span style={{ color: "red" }}>Salsa@Cal</span>
            <br />
            
          </Text>

          <Link
            href="mailto:salsaatcal@berkeley.edu"
            isExternal
            textStyle="subtitle2"
          >
            salsaatcal@berkeley.edu
          </Link>
        </Container>
        <Text
          as="a" // Make it a clickable link
          href="https://calendar.google.com/calendar/embed?src=c_42b968062b45d29a7dec9766e52205a073c67bfca7888fbf69842663a87ede68%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          textStyle="title1"
          target="_blank" // Open the link in a new tab
          rel="noopener noreferrer" // Security for external links
          style={{ marginBottom: '6rem' }} 
        >
          Calendar
        </Text>

        <Calendar ></Calendar>

      </Box>
    </>
  );
};

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
      wrapperClassName="fullStackHero"
    >
      <HomeContent />
    </Layout>
  );
};

export default Home;
