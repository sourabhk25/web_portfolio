import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/sereneStyles.png";
import proj2 from "../../public/images/projects/echoVisuals.png";
import proj3 from "../../public/images/projects/mrVoicePay.png";
import mlProj1 from "../../public/images/projects/stock_market_analysis.png";
import mlProj2 from "../../public/images/projects/intelligentCyberSecuritySystem.png";
import mlProj3 from "../../public/images/projects/automated_driving_system_lane_stop.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ title, summary, img, link, github, technologies = [] }) => {
  // Convert the array of technologies into a comma-separated string
  const technologiesStr = technologies.join(', ');

  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full border-solid border-dark dark:border-solid dark:border-light"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm text-justify">
          {summary}
        </p>
        {/* Displaying technologies as a comma-separated list */}
        <p className="font-medium">
          <strong>Technologies:</strong> {technologiesStr}
        </p>
        <div className="mt-2">
          <Link
            href={github}
            target="_blank"
            className="mt-4 inline-flex items-center rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            aria-label={`${title} GitHub link`}
          >
            <GithubIcon className="w-5 h-5 mr-2"/>
            <span className="ml-2">View Code</span>
          </Link>
        </div>
      </div>
    </article>
  );
};



const Project = ({ title, img, link, github, summary, technologies = [] }) => {
  // Convert the array of technologies into a comma-separated string
  const technologiesStr = technologies.join(', ');

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl
      border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
        dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image
            src={img}
            alt={title}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </Link>

      <div className="flex w-full flex-col items-start justify-between p-6 lg:p-8">
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl xs:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm text-justify">
          {summary}
        </p>
        <p className="font-medium">
          <strong>Technologies:</strong> {technologiesStr}
        </p>
        <div className="mt-2">
          <Link
            href={github}
            target="_blank"
            className="mt-4 inline-flex items-center rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            aria-label={`${title} GitHub link`}
          >
            <GithubIcon className="w-5 h-5 mr-2"/>
            <span className="ml-2">View Code</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Sourabh Kulkarni | Projects</title>
        <meta
          name="description"
          content="Discover the latest projects created by Sourabh Kulkarni, a Software developer with
        expertise in React.js and full-stack development and a Machine Learning Enthusiast. Browse through these various projects on Web development and Machine Learning."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Code & Learn!!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="SereneStyles"
                summary="An e-commerce web application which combines React, Spring Boot, and JWT for robust security and
                swift page loads. With a focus on a seamless user experience, it features a Tailwind CSS-designed interface
                for easy navigation, secure authentication, and efficient data management."
                img={proj1}
                link="https://github.com/sourabhk25/SereneStyles"
                github="https://github.com/sourabhk25/SereneStyles"
                technologies={["React", "Java", "Spring Boot", "MySQL", "JWT", "TailwindCSS"]}
              />
            </div>


            <div className="col-span-6 sm:col-span-12">
              <Project
                title="EchoVisuals"
                img={proj2}
                link="https://github.com/sourabhk25/EchoVisuals"
                github="https://github.com/sourabhk25/EchoVisuals"
                summary="A cutting-edge AI-driven image generation platform built on the MERN stack and enhanced
                with TailwindCSS, seamlessly interprets user prompts through OpenAI's DALL-E model to create beautiful images.
                Image management is achived by using Cloudinary platform."
                technologies={["React", "Node.js", "Express.js", "MongoDB", "OpenAI", "TailwindCSS", "Cloudinary"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Mr. Voice Pay"
                img={proj3}
                link="https://github.com/sourabhk25/MrVoicePay"
                github="https://github.com/sourabhk25/MrVoicePay"
                summary="Mr. Voice Pay revolutionizes online banking for visually impaired users, integrating voice commands
                via Alexa and Google Assistant with AWS and GCP. The app fortifies security by 50% through innovative voice and
                biometric authentication, alongside Morse code verification."
                technologies={["Alexa", "Google Assistant", "AWS", "GCP", "Python", "Java", "Android Studio"]}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Stock Market Analysis"
                summary="A dynamic Stock Market Analysis application for accurate forecasting of stock prices for Amazon,
                Google, Microsoft, and IBM. This tool offers interactive graphs and predictions with a deep learning model,
                enhancing investment strategies through insightful analysis."
                img={mlProj1}
                link="https://github.com/sourabhk25/Stock_Market_Analysis"
                github="https://github.com/sourabhk25/Stock_Market_Analysis"
                technologies={["Python", "PyTorch", "GRU", "Scikit-learn", "Plotly", "Seaborn"]}
              />
            </div>


            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Intelligent Cyber Security System"
                img={mlProj2 }
                link="https://github.com/sourabhk25/IntelligentCyberSecuritySystem"
                github="https://github.com/sourabhk25/IntelligentCyberSecuritySystem"
                summary="An advanced Intelligent Cyber Security System designed to detect network attacks in real-time and
                prevent potential damage. By analyzing network packets and employing the National Vulnerability Database,
                it achieves 90% accuracy in threat identification."
                technologies={["Python", "Neural Networks", "Wireshark", "NVD", "Flask"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Automated Driving System"
                img={mlProj3}
                link="https://github.com/sourabhk25/AutomatedDrivingSystem"
                github="https://github.com/sourabhk25/AutomatedDrivingSystem"
                summary="Developed an Automated Driving System, harnessing computer vision to enhance road safety through
                lane, pedestrian, and stop sign detection. Along with that, it supports a feature to detect if driver is drowsy or not.
                Powered by Python, OpenCV, and NumPy, it achieved a seamless 30 fps frame rate and 89% accuracy."
                technologies={["Python", "OpenCV", "NumPy", "Dlib"]}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
