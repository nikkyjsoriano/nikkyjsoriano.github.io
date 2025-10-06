import Typewriter from "typewriter-effect";
import landingImage from "../assets/landing.png";

function Landing() {
  return (
    <div className="hero min-h-[calc(100vh)] w-full pt-[65px]">
      <div className="hero-content flex-col xl:flex-row items-center h-full">
        <div className="lg:col-6 lg:p-0 p-6 flex-col col-span-full">
          <h1 className="lg:text-6xl text-5xl font-bold xl:text-left text-center">
            Hi! I'm Nikky
          </h1>
          <p className="pt-8 lg:text-3xl text-2xl flex lg:w-120 xl:justify-start justify-center">
            <Typewriter
              options={{
                loop: true,
                delay: 80,
                deleteSpeed: 500,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<<span class="text-secondary">h1</span>>Frontend Engineer<<span class="text-secondary">/h1</span>>'
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    '<span class="text-primary">public class</span> Backend Developer'
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    '<span class="text-accent">import</span> pandas <span class="text-accent">as</span> Data Engineer'
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </p>
        </div>
        <div className="lg:col-6 w-full lg:w-auto mt-8 lg:mt-0">
          <img
            src={landingImage}
            alt="placeholder"
            className="lg:max-h-[70vh] max-h-[60vh] w-auto rounded-lg scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
