import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../lib/animations";
import { leetcodeUsername } from "../data/siteData";
import SectionHeader from "./SectionHeader";

const LeetCodeStats = () => {
  return (
    <section className="min-h-screen py-16 bg-base-300 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Problem Solving" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="card bg-base-100 shadow-xl max-w-2xl w-full">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4 text-primary text-center mx-auto">LeetCode Stats</h2>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Baloo%202&ext=contest`}
                    alt="LeetCode Stats"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
