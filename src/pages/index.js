import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/portfolio_1_cropped.jpg";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Sourabh Kulkarni</title>
        <meta
          name="description"
          content="Explore Sourabh Kulkarni's work as Software Developer and Full-stack engineer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2  lg:w-full  lg:items-center md:inline-block items-center  md:w-full  md:items-center">
              <Image
                src={profilePic}
                alt="Sourabh Kulkarni"
                // className="h-auto w-full"
                className="h-1/2 w-1/2 md:mx-20 md:my-10 rounded-3xl border-2 border-solid border-dark mx-20"
                sizes="100vw"
                priority
              />
            </div>
            
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi there, I'm Sourabh !!"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium text-justify md:text-sm sm:!text-xs">
                As a skilled <strong>Software Developer</strong> and <strong>ML Enthusiast</strong>, I am dedicated to turning ideas into innovative applications.
  Explore my latest projects, showcasing my expertise in Web Development and Machine Learning field.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/Sourabh_Kulkarni.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:sourabhkulkarni258@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        
      </article>
    </>
  );
}
