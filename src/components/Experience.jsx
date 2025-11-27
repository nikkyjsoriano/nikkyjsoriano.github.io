import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      title: "Job Title",
      company: "Company Name",
      period: "Start Date – End Date",
      description:
        "Placeholder description of role and responsibilities. Replace with actual experience details.",
    },
    {
      title: "Job Title",
      company: "Company Name",
      period: "Start Date – End Date",
      description:
        "Placeholder description of role and responsibilities. Replace with actual experience details.",
    },
    {
      title: "Job Title",
      company: "Company Name",
      period: "Start Date – End Date",
      description:
        "Placeholder description of role and responsibilities. Replace with actual experience details.",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-base-200 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

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
                className="card bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
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
