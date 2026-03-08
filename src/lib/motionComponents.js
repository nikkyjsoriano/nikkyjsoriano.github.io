import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

export const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop),
})

export const MotionSection = chakra(motion.section, {
  shouldForwardProp: (prop) => isValidMotionProp(prop),
})

export default MotionBox
