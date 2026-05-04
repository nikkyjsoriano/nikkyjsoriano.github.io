import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "@/assets/landing.png";
import { heroRoles } from "@/data/siteData";

function Landing() {
  return (
    <div className="hero min-h-[calc(100vh-4rem)] w-full">
      <div className="hero-content flex-col xl:flex-row items-center h-full">
        <motion.div
          className="lg:col-6 lg:p-0 p-6 flex-col col-span-full"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.h1
            className="lg:text-6xl text-5xl font-bold xl:text-left text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
            Hi! I&apos;m Nikky
          </motion.h1>
          <motion.div
            className="pt-8 lg:text-3xl text-xl flex lg:w-120 xl:justify-start justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}>
            <Typewriter
              options={{
                loop: true,
                delay: 80,
                deleteSpeed: 500,
              }}
              onInit={(typewriter) => {
                heroRoles
                  .reduce(
                    (chain, role) => chain.typeString(role).pauseFor(1000).deleteAll(),
                    typewriter,
                  )
                  .start();
              }}/>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:col-6 w-full lg:w-auto mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.img
            src={landingImage}
            alt="placeholder"
            className="lg:max-h-[70vh] max-h-[60vh] w-auto rounded-lg scale-x-[-1]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}/>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
