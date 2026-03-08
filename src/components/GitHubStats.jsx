import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { MotionBox } from "../lib/motionComponents";
import { itemVariants } from "../lib/animations";
import { githubUsername } from "../data/siteData";
import { GitHubCalendar } from "react-github-calendar";
import SectionHeader from "./SectionHeader";

const GitHubStats = () => {
  return (
    <Box as="section" id="github" minH="100vh" py="20" px={{ base: 4, lg: 8 }} bg="bg.muted">
      <Box maxW="4xl" mx="auto">
        <SectionHeader title="Coding Activity" gradientFrom="primary" gradientTo="secondary" />

        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <Box bg="bg.emphasized" borderRadius="xl" p="8" shadow="xl" w="full">
            <Text fontSize="2xl" fontWeight="bold" color="primary" textAlign="center" mb="6">
              GitHub Activity
            </Text>
            
            <Box borderRadius="lg" overflow="hidden">
              <GitHubCalendar username={githubUsername} />
            </Box>

            <Text textAlign="center" fontSize="sm" color="fg.muted" mt="4">
              Recent contribution activity
            </Text>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default GitHubStats;
