import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import Footer from "./Footer";

interface Props {
  ref?: any;
}
export default function Navbar(props: Props) {
  const [hidden, setHidden] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    show && setHidden(false);
    return () => {};
  }, [hidden, show]);

  const [ref, bounds] = useMeasure();
  return (
    <nav className="fixed inset-x-0 top-0 z-40 shadow-md h-14 md:h-auto md:relative text-primary-dark md:shadow-none">
      <div
        ref={ref}
        className="absolute top-0 z-50 flex items-center justify-between w-full pl-6 bg-gray-50 md:p-3 md:items-end h-14 md:relative md:bg-transparent md:pb-2 md:h-vh-15 md:text-primary-dark"
      >
        <Link href="/">
          <a className="text-xl font-semibold md:text-3xl">
            Mattias Hallin {show}
          </a>
        </Link>
        <button
          onClick={() => {
            setShow(show ? false : true);
          }}
          className="flex items-center justify-center text-primary-dark md:hidden h-14 w-14"
        >
          {hidden ? (
            <FontAwesomeIcon className="" size="1x" icon={["fas", "bars"]} />
          ) : (
            <FontAwesomeIcon className="" size="1x" icon={["fas", "times"]} />
          )}
        </button>
        <div className="hidden space-x-6 text-xl font-medium md:block">
          <Link href="/">
            <a className="hover:text-primary">Work</a>
          </Link>
          <Link href="/#about">
            <a className="hover:text-primary">About</a>
          </Link>
        </div>
      </div>
      {!hidden && (
        <motion.div
          initial={{
            left: bounds.width,
          }}
          style={{ paddingTop: bounds.height * 2 }}
          onAnimationComplete={() => !show && setHidden(true)}
          animate={{ left: show ? 0 : bounds.width }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className={`
        } fixed bottom-0 top-0 w-full bg-gray-50 z-40 p-6 flex flex-col justify-start items-center text-2xl space-y-12`}
        >
          <Link href="/">
            <a onClick={() => setShow(false)} className="">
              Home
            </a>
          </Link>
          <Link href="/emotionstar">
            <a onClick={() => setShow(false)} className="text-2xl">
              Emotion Star
            </a>
          </Link>
          <Link href="/helpmate">
            <a onClick={() => setShow(false)} className="text-2xl">
              HelpMate
            </a>
          </Link>
          <Link href="/strava">
            <a onClick={() => setShow(false)} className="">
              Strava
            </a>
          </Link>
          <Link href="/spotify">
            <a onClick={() => setShow(false)} className="">
              Spotify
            </a>
          </Link>
          <Link href="/#about">
            <a onClick={() => setShow(false)} className="">
              About
            </a>
          </Link>
          <p className="absolute inset-x-0 bottom-0 z-50 pb-6 text-sm font-thin text-center">
            © Mattias Hallin, 2020.
          </p>
        </motion.div>
      )}
    </nav>
  );
}
