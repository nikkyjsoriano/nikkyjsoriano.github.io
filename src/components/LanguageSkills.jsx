import React from "react";
import { motion } from "framer-motion";
import { languages, tools } from "../data/siteData";

const LanguageSkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const SkillCard = ({ name, logo, colorClass }) => (
    <motion.div
      className="card bg-base-200 shadow-xl aspect-square w-full sm:w-auto max-w-[140px] sm:max-w-none mx-auto"
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformPerspective: 800 }}
    >
      <div className="card-body items-center text-center justify-center p-2 sm:p-6">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4"
        />
        <h3 className={`card-title text-base sm:text-2xl ${colorClass}`}>
          {name}
        </h3>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-base-100 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Programming Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-8"></div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {languages.map((language, index) => (
              <SkillCard
                key={index}
                name={language.name}
                logo={language.logo}
                colorClass="text-primary"
              />
            ))}
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Tools I Use
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-8"></div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {tools.map((tool, index) => (
              <SkillCard
                key={index}
                name={tool.name}
                logo={tool.logo}
                colorClass="text-secondary"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSkills;
