import React from "react";
import { motion } from "framer-motion";

const GitHubStats = () => {
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

  const username = "nikkyjsoriano";

  return (
    <section className="min-h-screen py-16 bg-base-200 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Coding Activity
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

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
                  <img
                    src={`https://ghchart.rshah.org/3abff8/${username}`}
                    alt="GitHub Contribution Calendar"
                    className="w-full"
                    style={{ imageRendering: 'pixelated' }}
                  />
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