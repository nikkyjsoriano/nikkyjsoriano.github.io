import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../lib/animations";
import { githubUsername } from "../data/siteData";
import SectionHeader from "./SectionHeader";
import { GitHubCalendar } from "react-github-calendar";

const GitHubStats = () => {
  return (
    <section className="min-h-screen py-16 bg-base-200 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Coding Activity" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="card bg-base-300 shadow-xl w-full">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4 text-primary text-center mx-auto">GitHub Contributions</h2>
                <div className="rounded-lg overflow-hidden">
                  <GitHubCalendar username={githubUsername} />
                </div>
                <p className="text-center text-sm text-base-content/70 mt-4">
                  My contribution activity over the past year
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
