import React from "react";
import { Box, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { MotionBox } from "../lib/motionComponents";
import { containerVariants, itemVariants } from "../lib/animations";
import { contactInfo } from "../data/siteData";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <Box as="section" id="contact" minH="100vh" py="8" bg="bg.muted" display="flex" alignItems="center">
      <Box w="full" maxW="4xl" mx="auto" px="4" py={{ base: 8, sm: 16 }}>
        <SectionHeader title="Contact Me" textSize="4xl" gradientFrom="secondary" gradientTo="primary" />

        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
            <MotionBox
              as="a"
              href={`tel:${contactInfo.phone}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              p="8"
              borderRadius="xl"
              bg="bg"
              shadow="lg"
              textAlign="center"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Box
                w="16"
                h="16"
                borderRadius="full"
                bg="primary/10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                mb="4"
              >
                <Icon as={LuPhone} color="primary" w="8" h="8" />
              </Box>
              <Text fontWeight="bold" fontSize="xl" color="primary" mt="2">
                Phone
              </Text>
              <Text color="fg.muted" mt="1">
                {contactInfo.phone}
              </Text>
            </MotionBox>

            <MotionBox
              as="a"
              href={`mailto:${contactInfo.email}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              p="8"
              borderRadius="xl"
              bg="bg"
              shadow="lg"
              textAlign="center"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Box
                w="16"
                h="16"
                borderRadius="full"
                bg="secondary/10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                mb="4"
              >
                <Icon as={LuMail} color="secondary" w="8" h="8" />
              </Box>
              <Text fontWeight="bold" fontSize="xl" color="secondary" mt="2">
                Email
              </Text>
              <Text color="fg.muted" mt="1">
                {contactInfo.email}
              </Text>
            </MotionBox>

            <MotionBox
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              p="8"
              borderRadius="xl"
              bg="bg"
              shadow="lg"
              textAlign="center"
            >
              <Box
                w="16"
                h="16"
                borderRadius="full"
                bg="accent/10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                mb="4"
              >
                <Icon as={LuMapPin} color="accent" w="8" h="8" />
              </Box>
              <Text fontWeight="bold" fontSize="xl" color="accent" mt="2">
                Location
              </Text>
              <Text color="fg.muted" mt="1">
                {contactInfo.location}
              </Text>
            </MotionBox>
          </SimpleGrid>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Contact;
