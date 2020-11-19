import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import useMeasure from "react-use-measure";

interface Props {
  children: any;
  background?: string;
  space?: boolean;
}
Body.defaultProps = {
  background: "gray",
};
export default function Body(props: Props) {
  const [ref, boundary] = useMeasure();
  return (
    <div className={`w-full font-normal bg-gray-50  text-body`}>
      <Head>
        <title>Mattias Hallin - Portfolio</title>
      </Head>
      <div
        style={{
          minHeight: "101vh",
        }}
        className="flex flex-col w-full max-w-screen-xl mx-auto sm:w-10/12"
      >
        <Navbar ref={ref} />
        <div
          className={`mt-14 md:mt-0 ${props.space && "space-y-6 md:space-y-1"}`}
        >
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
