import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const IndexHeader = () => (
  <div className="flex flex-col justify-between flex-none w-full p-10 lg:h-screen lg:max-w-md 2xl:max-w-lg overscroll-contain sm:content-center">
    <motion.h1
      initial={{
        opacity: 0,
        translateX: -100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="text-3xl font-medium text-left text-primary-dark"
    >
      Mattias Hallin
    </motion.h1>
    <motion.p
      initial={{
        opacity: 0,
        translateX: -100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        delay: 0.1,
        duration: 0.5,
      }}
      className="my-10 text-xl text-right sm:text-2xl text-primary"
    >
      I’m an{" "}
      <span className="font-semibold text-primary-dark">
        Interaction Designer
      </span>
      <br />
      and{" "}
      <span className="font-semibold text-primary-dark">
        Front End Developer
      </span>
      <br />
      interested in{" "}
      <span className="font-semibold text-primary-dark">User Experience</span>
      <br />
      and{" "}
      <span className="font-semibold text-primary-dark">
        Innovative Interactions
      </span>
      <br />
      <Link href="/about">
        <a className="text-lg text-primary-dark hover:text-primary">
          Learn More..
        </a>
      </Link>
    </motion.p>
    <motion.div
      initial={{
        opacity: 0,
        translateX: -50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      className="self-center space-x-6 text-blue-500 sm:text-green-500 md:text-indigo-500 lg:text-red-500 xl:text-black 2xl:text-gray-500"
    >
      <a href="">
        <FontAwesomeIcon
          className="hover:text-primary"
          size="2x"
          icon={["fab", "instagram"]}
        />
      </a>
      <a href="https://www.linkedin.com/in/mattias-hallin-594304177/">
        <FontAwesomeIcon
          className="hover:text-primary"
          size="2x"
          icon={["fab", "linkedin-in"]}
        />
      </a>
      <a href="">
        <FontAwesomeIcon
          className="hover:text-primary"
          size="2x"
          icon={["fab", "github"]}
        />
      </a>
    </motion.div>
  </div>
);
export default IndexHeader;
