import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { githubUsername } from "@/data/siteData";
import SectionHeader from "@/components/SectionHeader";

export interface GitHubStatsProps {
  theme: "light" | "dark";
}

function GitHubStats({ theme }: GitHubStatsProps) {
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
              colorScheme={theme}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
