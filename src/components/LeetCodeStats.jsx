import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { MotionBox } from "../lib/motionComponents";
import { itemVariants } from "../lib/animations";
import { leetcodeUsername } from "../data/siteData";
import SectionHeader from "./SectionHeader";
import { useColorMode } from "./ui/color-mode";

const LeetCodeStats = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="section" id="leetcode" minH="100vh" bg="bg" py="20" px={{ base: 4, lg: 8 }}>
      <Box maxW="2xl" mx="auto">
        <SectionHeader title="Problem Solving" gradientFrom="accent" gradientTo="secondary" />

        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          display="flex"
          justifyContent="center"
        >
          <Box bg="bg" borderRadius="xl" p="8" shadow="xl" w="full">
            <Text fontSize="2xl" fontWeight="bold" color="primary" textAlign="center" mb="6">
              LeetCode Stats
            </Text>
            <Box borderRadius="lg" overflow="hidden">
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=${colorMode}&font=Baloo%202&ext=contest`}
                alt="LeetCode Stats"
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default LeetCodeStats;
