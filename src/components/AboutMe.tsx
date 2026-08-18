import { Fragment } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import { aboutMe } from "../data/siteData";
import SectionHeader from "./SectionHeader";

function AboutMe() {
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
            {aboutMe.paragraphs.map((segments, paragraphIndex) => (
              <motion.p
                key={paragraphIndex}
                className="mb-4 text-lg"
                variants={itemVariants}
              >
                {segments.map((segment, segmentIndex) =>
                  segment.color === undefined ? (
                    <Fragment key={segmentIndex}>{segment.text}</Fragment>
                  ) : (
                    <span key={segmentIndex} className={`${segment.color} font-semibold`}>
                      {segment.text}
                    </span>
                  ),
                )}
              </motion.p>
            ))}
            <motion.p className="text-lg" variants={itemVariants}>
              I&apos;m always looking to learn new technologies and take on
              interesting projects. You can find me on various platforms below,
              and if you&apos;d like to see my resume{" "}
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
}

export default AboutMe;
