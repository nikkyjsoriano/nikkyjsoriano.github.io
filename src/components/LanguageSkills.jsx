import React from "react";
import { motion } from "framer-motion";

const LanguageSkills = () => {
  const languages = [
    {
      name: "Vue",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Grafana",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    },
    {
      name: "InfluxDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/influxdb/influxdb-original.svg",
    },
  ];

  const tools = [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Terraform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-base-100 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Programming Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-8"></div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {languages.map((language, index) => (
              <motion.div
                key={index}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 aspect-square w-full sm:w-auto max-w-[140px] sm:max-w-none mx-auto hover:scale-105"
                variants={itemVariants}
              >
                <div className="card-body items-center text-center justify-center p-2 sm:p-6">
                  <img
                    src={language.logo}
                    alt={`${language.name} logo`}
                    className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4"
                  />
                  <h3 className="card-title text-base sm:text-2xl text-primary">
                    {language.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Tools I Use
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-8"></div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 aspect-square w-full sm:w-auto max-w-[140px] sm:max-w-none mx-auto hover:scale-105"
                variants={itemVariants}
              >
                <div className="card-body items-center text-center justify-center p-2 sm:p-6">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4"
                  />
                  <h3 className="card-title text-base sm:text-2xl text-secondary">
                    {tool.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSkills;
