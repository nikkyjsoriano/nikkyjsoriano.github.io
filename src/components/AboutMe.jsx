import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { MotionBox } from "../lib/motionComponents";
import { containerVariants, itemVariants } from "../lib/animations";
import { aboutMe } from "../data/siteData";
import SectionHeader from "./SectionHeader";

const AboutMe = () => {
  return (
    <Box
      as="section"
      id="about"
      minH="100vh"
      py={{ base: 16, lg: 20 }}
      bg="bg.muted"
      display="flex"
      alignItems="center"
    >
      <Box w="full" maxW="4xl" mx="auto" px={{ base: 4, lg: 8 }}>
        <SectionHeader title="About Me" gradientFrom="secondary" gradientTo="accent" />

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          mx="auto"
        >
          <VStack align="start" gap={4}>
            {aboutMe.paragraphs.map((segments, i) => (
              <MotionBox key={i} variants={itemVariants}>
                <Text fontSize="lg" color="fg" lineHeight="tall">
                  {segments.map((segment, j) =>
                    segment.color ? (
                      <Text as="span" key={j} color={segment.color} fontWeight="semibold">
                        {segment.text}
                      </Text>
                    ) : (
                      <React.Fragment key={j}>{segment.text}</React.Fragment>
                    )
                  )}
                </Text>
              </MotionBox>
            ))}
            <MotionBox variants={itemVariants}>
              <Text fontSize="lg" color="fg" lineHeight="tall">
                I'm always looking to learn new technologies and take on
                interesting projects. You can find me on various platforms below,
                and if you'd like to see my resume{" "}
                <Box
                  as="a"
                  href={aboutMe.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="accent"
                  fontWeight="semibold"
                  transition="color 0.3s"
                  _hover={{ textDecoration: "underline" }}
                >
                  Click Here
                </Box>
              </Text>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default AboutMe;
