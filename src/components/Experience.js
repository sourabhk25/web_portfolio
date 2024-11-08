import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  // Assuming work is a single string, we split it into an array based on a delimiter
  // For example, using "; " as a delimiter
  const workItems = work.split("; ").filter(item => item.trim() !== '');

  // Function to render work items as list
  const renderWorkList = (workItems) => {
    return workItems.map((item, index) => (
      <li key={index} className="list-disc list-inside dark:text-white text-black text-justify">
        {item}
      </li>
    ));
  };

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        {/* <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} <a className="capitalize text-primary dark:text-primaryDark" href={companyLink} target="_blank" rel="noopener noreferrer">@{company}</a>
        </h3> */}
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          {company === "InnovateMore Inc." ? (
            <span className="capitalize text-primary dark:text-primaryDark">@{company}</span>
          ) : (
            <a
              className="capitalize text-primary dark:text-primaryDark"
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{company}
            </a>
          )}
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="font-medium w-full md:text-sm">
          {renderWorkList(workItems)}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Software Engineer Intern"
              company="InnovateMore Inc."
              companyLink="N/A"
              time="Aug 2024 - Present"
              address="San Antonio, TX"
              work="Collaborated on integrating AWS Cognito with a Spring Boot application, focusing on setting up user authentication and authorization 
              flows using REST API calls to support secure user management.; Created comprehensive technical documentation for setting up 
              PostgreSQL databases, running Maven builds, and deploying Spring Boot applications, enhancing onboarding efficiency for new team members."
            />

            <Details
              position="Software Engineer Intern"
              company="Parma CRM Inc."
              companyLink="https://www.parma.ai/"
              time="Jul 2024 - Aug 2024"
              address="Sunnyvale, CA"
              work="Designed and implemented a Ruby-based API integration for fetching and processing notes from Parma CRM and HubSpot, 
              optimizing the data retrieval process by 40%, which improved efficiency in generating CSV reports.; Automated the end-to-end workflow 
              for note data extraction and CSV generation using GitHub Actions and Ruby scripts, reducing manual effort by 60% and ensuring consistent 
              data availability for stakeholders."
            />

            {/* <Details
              position="Computer Science Tutor"
              company="CSU Chico"
              companyLink="https://www.csuchico.edu/csci/"
              time="Jan 2024 - May 2024"
              address="Chico, CA"
              work="Provided tutoring for various computer science courses, including programming, algorithms, data structures,
              computer vision, databases, and computer security, with a focus on communication and personalized instruction."
            /> */}

            <Details
              position="Research Assistant"
              company="CSU Chico"
              companyLink="https://www.csuchico.edu/csci/"
              time="Aug 2023 - Feb 2024"
              address="Chico, CA"
              work="Assisted Dr. Abbas Attarwala with research on the 'Impacts of AI on children', involving an extensive literature review of 60 papers covering
              topics like bias, mental health, AI-generated content, fake data, and parental controls."
            />

            {/* <Details
              position="Computer Science Grader"
              company="CSU Chico"
              companyLink="https://www.csuchico.edu/csci/"
              time="Jan 2023 - Dec 2023"
              address="Chico, CA"
              work="Assigned grades for coursework and quizzes in courses like 'Programming and algorithms', 'Algorithms and
              Data structures' at California State University, Chico."
            /> */}

            <Details
              position="Senior Software Engineer"
              company="HSBC"
              companyLink="https://www.hsbc.com/careers/where-we-hire/india/technology"
              time="Mar 2022 - Jul 2022"
              address="Pune, India"
              work="Developed and optimized data migration solutions, reducing execution time by 120% through REST APIs for
               Hadoop to PostgreSQL and Hadoop to Oracle, and utilized on-premises VMs for deployment.;
               Automated deployment processes by creating Jenkins pipelines and Ansible job templates using Groovy scripts,
                alongside implementing security and error reporting with Checkmarx and Nexus IQ scans, reducing manual work by 40%."
            />

            <Details
              position="Software Engineer"
              company="HSBC"
              companyLink="https://www.hsbc.com/careers/where-we-hire/india/technology"
              time=" Jul 2019 - Mar 2022"
              address="Pune, India"
              work="Enhanced API performance for high-net-worth customer relationship managers using Spring and Apache Camel,
              including the implementation of connection pooling and data warehousing techniques with Hadoop.;
              Led a team in developing Spring Boot APIs on AWS, Docker, and Microservice-based platforms, integrating Splunk
              and AppDynamics for application monitoring, and serving as the security champion for the project."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
