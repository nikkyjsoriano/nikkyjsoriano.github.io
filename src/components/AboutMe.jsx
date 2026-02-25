import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import SectionHeader from "./SectionHeader";

const AboutMe = () => {
  return (
    <section className="min-h-screen py-16 bg-base-300 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="About Me" />

          <motion.div
            className="prose prose-lg max-w-none mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p className="mb-4 text-lg" variants={itemVariants}>
              Hi! 👋 I'm Nikky, a{" "}
              <span className="text-primary font-semibold">
                full-stack developer
              </span>{" "}
              focused on building modern web applications and cloud solutions. I
              enjoy creating impactful software that solves real-world problems.
            </motion.p>
            <motion.p className="mb-4 text-lg" variants={itemVariants}>
              On the frontend, I work with{" "}
              <span className="text-secondary font-semibold">React</span>,{" "}
              <span className="text-secondary font-semibold">Vue</span>,{" "}
              <span className="text-secondary font-semibold">HTML</span>, and{" "}
              <span className="text-secondary font-semibold">JavaScript</span>{" "}
              to build responsive and intuitive interfaces. For the backend, I
              use
              <span className="text-accent font-semibold">
                {" "}
                Spring Boot
              </span>,{" "}
              <span className="text-accent font-semibold">FastAPI</span>, and{" "}
              <span className="text-accent font-semibold">Python</span> to
              develop scalable applications.
            </motion.p>
            <motion.p className="mb-4 text-lg" variants={itemVariants}>
              I also specialize in{" "}
              <span className="text-primary font-semibold">
                data engineering
              </span>
              , where I build data pipelines, work with time-series databases
              like{" "}
              <span className="text-secondary font-semibold">InfluxDB</span>,
              and create visualizations using{" "}
              <span className="text-secondary font-semibold">Grafana</span>. My
              experience includes data processing,{" "}
              <span className="text-accent font-semibold">ETL workflows</span>,
              and{" "}
              <span className="text-accent font-semibold">
                real-time analytics
              </span>
              .
            </motion.p>
            <motion.p className="text-lg" variants={itemVariants}>
              I'm always looking to learn new technologies and take on
              interesting projects. You can find me on various platforms below,
              and if you'd like to see my resume{" "}
              <a
                href="https://drive.google.com/uc?export=download&id=1-jxTcrXF17w7_XAPt122e_uX9aJdvCB0"
                className="text-primary hover:text-primary-focus font-medium transition-colors duration-300"
              >
                Click Here
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
