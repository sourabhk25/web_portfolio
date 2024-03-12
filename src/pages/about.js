import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/formal_pic_cropped.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";


function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollToTop && window.pageYOffset > 400){
        setShowScrollToTop(true);
      } else if (showScrollToTop && window.pageYOffset <= 400){
        setShowScrollToTop(false);
      }
    };
  
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Sourabh Kulkarni | About Me</title>
        <meta name="description" content='About me'/>
      </Head>
      <TransitionEffect/>
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="About Me"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium text-justify">
                Hi, I&apos;m <strong>Sourabh Kulkarni</strong>, a Software Engineer, Web Developer, App Developer and ML
                Enthusiast with a passion for creating beautiful, functional,
                and user-centered digital experiences. With 3+ years of experience in the field. I am always looking for
                new and innovative ways to bring my clients' visions to life.
              </p>
              <p className="my-4 font-medium text-justify">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium text-justify">
                Whether I&apos;m working on a website, mobile app, or
                any ML project, I bring my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next
                project.
              </p>
              <p className="mt-4 font-medium text-justify">
                In my leisure time, I find joy in indulging two of my favorite pastimes:
                watching soccer matches and enjoying anime.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1 md:w-1/2 md:h-auto md:mx-20
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark dark:border-light "
                src = {profilePic}
                alt="Sourabh Kulkarni"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row
            xl:items-center md:order-3 md:mx-20">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={20} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center my-40 md:mx-10">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={3} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>


            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
        {showScrollToTop &&
          <button onClick={scrollToTop} className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-light dark:bg-dark border-2 border-dark dark:border-light shadow-md text-dark dark:text-light cursor-pointer hover:bg-opacity-90 focus:outline-none">
            ↑
          </button>
        }
      </main>
    </>
  );
}
