import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { MotionBox } from "../lib/motionComponents";
import { languages, tools } from "../data/siteData";
import SectionHeader from "./SectionHeader";

const SkillCard = ({ name, logo, color }) => (
  <MotionBox
    whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{ transformPerspective: 800 }}
    bg="bg.muted"
    borderRadius="xl"
    shadow="xl"
    aspectRatio="1"
    w="full"
    maxW="140px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    p={{ base: 2, sm: 6 }}
    cursor="pointer"
  >
    <Box
      as="img"
      src={logo}
      alt={name}
      w={{ base: 10, sm: 16 }}
      h={{ base: 10, sm: 16 }}
      mb={{ base: 2, sm: 4 }}
    />
    <Text fontWeight="bold" fontSize={{ base: "md", sm: "2xl" }} color={color}>
      {name}
    </Text>
  </MotionBox>
);

const LanguageSkills = () => {
  return (
    <Box
      as="section"
      id="skills"
      minH="100vh"
      py="20"
      px={{ base: 4, lg: 8 }}
      display="flex"
      alignItems="center"
    >
      <Box maxW="6xl" mx="auto" w="full" textAlign="center">
        <Box mb="12">
          <SectionHeader
            title="Programming Skills"
            textSize="4xl"
            gradientFrom="primary"
            gradientTo="accent"
          />
          <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap={{ base: 4, sm: 6 }} justifyItems="center">
            {languages.map((language) => (
              <SkillCard
                key={language.name}
                name={language.name}
                logo={language.logo}
                color="primary"
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <SectionHeader
            title="Tools I Use"
            textSize="3xl"
            gradientFrom="secondary"
            gradientTo="accent"
          />
          <SimpleGrid columns={{ base: 2, lg: 4 }} gap={{ base: 4, sm: 6 }} maxW="4xl" mx="auto" justifyItems="center">
            {tools.map((tool) => (
              <SkillCard
                key={tool.name}
                name={tool.name}
                logo={tool.logo}
                color="secondary"
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguageSkills;
