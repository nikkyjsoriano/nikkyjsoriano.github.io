import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { githubUsername } from "@/data/siteData";
import SectionHeader from "@/components/SectionHeader";

/**
 * The dim theme's base-300/base-content/primary/secondary, as hex. The
 * activity-graph API takes hex query params, not the site's OKLCH CSS vars,
 * so these are pinned by hand to match src/App.css's `dim` theme.
 */
const CHART_BG = "20252e";
const CHART_TEXT = "b2ccd6";
const CHART_LINE = "9fe88d";
const CHART_POINT = "ff7d5d";

function GitHubStats() {
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
            className="flex justify-center">
            <div className="card bg-base-300 shadow-xl w-full">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4 text-primary text-center mx-auto">
                  GitHub Contributions
                </h2>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=${CHART_BG}&color=${CHART_TEXT}&line=${CHART_LINE}&point=${CHART_POINT}&area=true&area_color=${CHART_LINE}&hide_border=true&hide_title=true`}
                    alt="GitHub Contribution Activity Graph"
                    className="w-full"/>
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
}

export default GitHubStats;
