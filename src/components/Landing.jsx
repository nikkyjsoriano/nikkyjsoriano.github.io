import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MotionBox } from "../lib/motionComponents";
import Typewriter from "typewriter-effect";
import landingImage from "../assets/landing.png";

function Landing() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, lg: 8 }}
      py="24"
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        align="center"
        justify="center"
        gap="12"
        maxW="7xl"
        w="full"
        mx="auto"
      >
        <MotionBox
          flex="1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Text
              as="h1"
              fontSize={{ base: "4xl", lg: "6xl" }}
              fontWeight="bold"
              color="fg"
              textAlign={{ base: "center", xl: "left" }}
            >
              Hi! I'm Nikky
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Box
              fontSize={{ base: "xl", lg: "3xl" }}
              mt="4"
              display="flex"
              justifyContent={{ base: "center", xl: "flex-start" }}
            >
              <Typewriter
                options={{
                  loop: true,
                  delay: 80,
                  deleteSpeed: 500,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<<span style="color: var(--chakra-colors-secondary)">h1</span>>Frontend Engineer<<span style="color: var(--chakra-colors-secondary)">/h1</span>>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<span style="color: var(--chakra-colors-primary)">public class</span> Backend Developer'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<span style="color: var(--chakra-colors-accent)">import</span> pandas <span style="color: var(--chakra-colors-accent)">as</span> Data Engineer'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </Box>
          </motion.div>
        </MotionBox>
        <MotionBox
          flex="1"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          display="flex"
          justifyContent="center"
        >
          <MotionBox
            as="img"
            src={landingImage}
            alt="Nikky Soriano"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "scaleX(-1)" }}
            borderRadius="lg"
            maxH={{ base: "60vh", lg: "70vh" }}
            w="auto"
          />
        </MotionBox>
      </Flex>
    </Box>
  );
}

export default Landing;
