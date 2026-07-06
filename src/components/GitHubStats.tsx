import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { githubUsername } from "@/data/siteData";
import SectionHeader from "@/components/SectionHeader";

/**
 * The dim theme's base-100/primary, as hex. react-activity-calendar's theme
 * prop interpolates a 5-step scale from two literal colors, not the site's
 * OKLCH CSS vars, so these are pinned by hand to match App.css's `dim` theme.
 */
const CHART_EMPTY = "#2a303c";
const CHART_FILLED = "#9fe88d";

function GitHubStats() {
  return (
    <section className="min-h-screen py-16 bg-base-200 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="GitHub Activity" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="w-full overflow-x-auto flex justify-center">
            <GitHubCalendar
              username={githubUsername}
              colorScheme="dark"
              theme={{ dark: [CHART_EMPTY, CHART_FILLED] }}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
