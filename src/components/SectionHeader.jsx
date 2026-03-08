import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

function SectionHeader({ title, gradientFrom = "primary", gradientTo = "secondary", textSize = "5xl" }) {
  return (
    <MotionBox
      textAlign="center"
      mb="12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Text
        as="h2"
        fontSize={textSize}
        fontWeight="bold"
        mb="4"
        bgGradient="to-r"
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        bgClip="text"
        color="transparent"
      >
        {title}
      </Text>
      <Box
        w="24"
        h="1"
        mx="auto"
        borderRadius="full"
        bgGradient="to-r"
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
      />
    </MotionBox>
  );
}

export default SectionHeader;
