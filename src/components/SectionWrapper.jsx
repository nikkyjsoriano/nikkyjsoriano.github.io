import { MotionBox } from "../lib/motionComponents";
import { fadeInUp } from "../lib/animations";

function SectionWrapper({ id, children }) {
  return (
    <MotionBox
      id={id}
      minH="100vh"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {children}
    </MotionBox>
  );
}

export default SectionWrapper;
