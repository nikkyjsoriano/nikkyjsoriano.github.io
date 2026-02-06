import { useState, useEffect } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { MotionBox } from "../lib/motionComponents";
import { LuArrowUp } from "react-icons/lu";

function BackToTopButton() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setShowBackToTop(shouldShow);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionBox
      as="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      position="fixed"
      bottom="8"
      right="8"
      zIndex="100"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="bg.muted"
      borderWidth="2px"
      borderColor="primary"
      shadow="lg"
      cursor="pointer"
      overflow="hidden"
      fontWeight="semibold"
      initial="hidden"
      animate={showBackToTop ? "visible" : "hidden"}
      whileHover="hover"
      variants={{
        hidden: { opacity: 0, pointerEvents: "none", width: "50px", height: "50px", borderRadius: "50px" },
        visible: { opacity: 1, pointerEvents: "auto", width: "50px", height: "50px", borderRadius: "50px" },
        hover: { opacity: 1, pointerEvents: "auto", width: "140px", height: "50px", borderRadius: "50px" }
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <MotionBox
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          variants={{
            hidden: { y: 0 },
            visible: { y: 0 },
            hover: { y: "-200%" }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Icon as={LuArrowUp} boxSize="4" color="fg" />
        </MotionBox>
        <MotionBox
          as="span"
          position="absolute"
          color="fg"
          whiteSpace="nowrap"
          variants={{
            hidden: { opacity: 0, fontSize: "0px" },
            visible: { opacity: 0, fontSize: "0px" },
            hover: { opacity: 1, fontSize: "13px" }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          Back to Top
        </MotionBox>
      </Box>
    </MotionBox>
  );
}

export default BackToTopButton;
