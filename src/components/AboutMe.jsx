import React from "react";

const AboutMe = () => {
  return (
    <section className="min-h-screen py-16 bg-base-300 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none mx-auto">
            <p className="mb-4 text-lg">
              Hi! 👋 I'm Nikky, a{" "}
              <span className="text-primary font-semibold">
                full-stack developer
              </span>{" "}
              focused on building modern web applications and cloud solutions. I
              enjoy creating impactful software that solves real-world problems.
            </p>
            <p className="mb-4 text-lg">
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
            </p>
            <p className="mb-4 text-lg">
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
            </p>
            <p className="text-lg">
              I'm always looking to learn new technologies and take on
              interesting projects. You can find me on various platforms below,
              and if you'd like to see my resume{" "}
              <a
                href="https://drive.google.com/uc?export=download&id=1-jxTcrXF17w7_XAPt122e_uX9aJdvCB0"
                className="text-primary hover:text-primary-focus font-medium transition-colors duration-300"
              >
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
