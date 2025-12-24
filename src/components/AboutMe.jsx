import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import { aboutMe } from "../data/siteData";
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
            {aboutMe.paragraphs.map((segments, i) => (
              <motion.p
                key={i}
                className="mb-4 text-lg"
                variants={itemVariants}
              >
                {segments.map((segment, j) =>
                  segment.color ? (
                    <span key={j} className={`${segment.color} font-semibold`}>
                      {segment.text}
                    </span>
                  ) : (
                    <React.Fragment key={j}>{segment.text}</React.Fragment>
                  )
                )}
              </motion.p>
            ))}
            <motion.p className="text-lg" variants={itemVariants}>
              I'm always looking to learn new technologies and take on
              interesting projects. You can find me on various platforms below,
              and if you'd like to see my resume{" "}
              <a
                href={aboutMe.resumeLink}
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
