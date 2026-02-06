import React from "react";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { MotionBox } from "../lib/motionComponents";
import { containerVariants } from "../lib/animations";
import { experiences } from "../data/siteData";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const slideVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -60 : 60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box as="section" id="experience" minH="100vh" bg="bg.muted" py="20" px={{ base: 4, lg: 8 }}>
      <Box maxW="4xl" mx="auto">
        <SectionHeader title="Experience" />

        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <VStack gap="8" w="full">
            {experiences.map((exp, index) => (
              <MotionBox
                key={exp.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={slideVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                viewport={{ once: true }}
                w="full"
              >
                <Box bg="bg.emphasized" borderRadius="xl" p="8" shadow="xl" w="full">
                  <HStack 
                    flexDir={{ base: "column", sm: "row" }} 
                    alignItems={{ base: "flex-start", sm: "center" }} 
                    justifyContent="space-between" 
                    mb="2"
                    gap={{ base: "1", sm: "0" }}
                  >
                    <Text fontSize="2xl" fontWeight="bold" color="primary">
                      {exp.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {exp.period}
                    </Text>
                  </HStack>
                  <Text fontSize="lg" fontWeight="semibold" color="secondary" mb="2">
                    {exp.company}
                  </Text>
                  <Text color="fg" mt="3" lineHeight="tall">
                    {exp.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </VStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Experience;
