import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface Props {
  left?: string;
  right?: string;
}
export default function ProjectSwitchLeft(props: Props) {
  const [ref, boundary] = useMeasure();
  return (
    <div className="fixed inset-y-0 left-0 z-50 flex items-center justify-center w-1/12">
      <div
        style={{
          width: "100%",
        }}
        className="w-full bg-black bg-opacity-25 shadow-md"
      >
        <motion.div
          style={{
            left: "-16.8vw",
          }}
          className="absolute transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-100 hover:shadow-md"
          whileHover={{
            left: "0",
            transition: { duration: 0.5 },
          }}
        >
          <Link href={props.left ? `/${props.left}` : ""}>
            <a
              ref={ref}
              className="flex justify-end text-opacity-50 text-primary-dark hover:text-opacity-100"
              style={{
                width: "25vw",
              }}
            >
              <p className="py-3 text-xl font-semibold">{props.left}</p>
              <div
                style={{
                  width: "8.2vw",
                }}
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon
                  className=""
                  size="1x"
                  icon={["fas", "arrow-left"]}
                />
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
