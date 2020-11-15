import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface Props {
  left?: string;
  right?: string;
}
export default function ProjectSwitchRight(props: Props) {
  const [ref, boundary] = useMeasure();
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 flex items-center justify-center w-1/12 ${
        !props.right && "hidden"
      }`}
    >
      <motion.div
        style={{
          left: "-16.8vw",
        }}
        className="absolute transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-100 hover:shadow-md"
        whileHover={{
          left: "0vw",
          transition: { duration: 0.5 },
        }}
      >
        <Link href={props.right ? `/emotionstar` : ""}>
          <a
            className="flex justify-start text-opacity-50 text-primary-dark hover:text-opacity-100"
            style={{
              width: "25vw",
            }}
          >
            <div
              style={{
                width: "8.2vw",
              }}
              className="flex items-center justify-center"
            >
              <FontAwesomeIcon
                className=""
                size="1x"
                icon={["fas", "arrow-right"]}
              />
            </div>
            <p className="py-3 text-xl font-semibold">{props.right}</p>
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
