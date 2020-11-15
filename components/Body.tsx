import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Head from "next/head";

interface Props {
  children: any;
  background?: string;
}
Body.defaultProps = {
  background: "gray",
};
export default function Body(props: Props) {
  return (
    <div className={`w-full font-normal bg-gray-100  text-body`}>
      <Head>
        <title>Mattias Hallin - Portfolio</title>
      </Head>
      <div
        style={{
          minHeight: "120vh",
          paddingBottom: "15vh",
        }}
        className="flex flex-col w-10/12 max-w-screen-xl mx-auto"
      >
        <Navbar />
        <div className="space-y-6">{props.children}</div>
      </div>
    </div>
  );
}
