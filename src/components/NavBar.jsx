import React, { useState } from "react";
import {
  Flex,
  Box,
  HStack,
  Drawer,
  CloseButton,
} from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import { ColorModeButton } from "./ui/color-mode";
import { MotionBox } from "../lib/motionComponents";
import { navItems } from "../data/navItems";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function NavBar({ onNavClick, isAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (href) => {
    onNavClick(href);
    setIsMenuOpen(false);
  };

  const visibleItems = navItems.filter(
    (item) => !item.authRequired || isAuthenticated
  );

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      bg="bg"
      shadow="sm"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, lg: 8 }}
        py="3"
        align="center"
        justify="space-between"
      >
        <MotionBox
          as="a"
          href="#home"
          onClick={() => handleNavItemClick('#home')}
          fontWeight="bold"
          fontSize={{ base: "2xl", lg: "3xl" }}
          color="primary"
          cursor="pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          _hover={{ textDecoration: "none" }}
        >
          Nikky Soriano
        </MotionBox>

        <HStack gap="2" display={{ base: "none", lg: "flex" }}>
          {visibleItems.map((item, i) => (
            <MotionBox
              key={item.href}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Box
                as="a"
                href={item.href}
                color="fg"
                px="3"
                py="2"
                borderRadius="md"
                fontWeight="bold"
                fontSize="xl"
                cursor="pointer"
                transition="background 0.2s"
                textDecoration="none"
                display="inline-flex"
                alignItems="center"
                _hover={{ bg: "bg.muted", textDecoration: "none" }}
                _active={{ bg: "bg.emphasized" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item.href);
                }}
              >
                {item.label}
              </Box>
            </MotionBox>
          ))}
          <ColorModeButton />
        </HStack>

        <Box
          as="button"
          display={{ base: "inline-flex", lg: "none" }}
          alignItems="center"
          justifyContent="center"
          color="fg"
          px="3"
          py="2"
          borderRadius="md"
          cursor="pointer"
          transition="background 0.2s"
          _hover={{ bg: "bg.muted" }}
          _active={{ bg: "bg.emphasized" }}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <LuX /> : <LuMenu />}
        </Box>
      </Flex>

      <Drawer.Root
        open={isMenuOpen}
        onOpenChange={(e) => setIsMenuOpen(e.open)}
        placement="end"
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="bg">
            <Drawer.Header>
              <Drawer.Title>Menu</Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Flex direction="column" gap="4">
                {visibleItems.map((item) => (
                  <Box
                    key={item.href}
                    as="a"
                    href={item.href}
                    color="fg"
                    px="3"
                    py="2"
                    borderRadius="md"
                    cursor="pointer"
                    transition="background 0.2s"
                    textDecoration="none"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    _hover={{ bg: "bg.muted", textDecoration: "none" }}
                    _active={{ bg: "bg.emphasized" }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavItemClick(item.href);
                    }}
                    fontSize="lg"
                  >
                    {item.label}
                  </Box>
                ))}
                <Box mt="4">
                  <ColorModeButton />
                </Box>
              </Flex>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  );
}

export default NavBar;
