import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../lib/animations";
import { experiences } from "../data/siteData";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const slideVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -60 : 60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen py-16 bg-base-200 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Experience" />

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                custom={index}
                variants={slideVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="card-body">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h2 className="card-title text-2xl text-primary">
                      {exp.title}
                    </h2>
                    <span className="text-sm text-base-content/70">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-base-content/80">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
