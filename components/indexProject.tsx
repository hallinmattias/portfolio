import Link from "next/link";
import { motion, transform } from "framer-motion";

interface Props {
  nr: any;
  year: string;
  name: string;
  location: string;
  src: string;
  wip?: boolean;
  imgAlt?: string;
  id?: string;
}

const IndexProject = (props: Props) => (
  <div
    id={props.id}
    className="relative flex w-full lg:p-4 lg:h-screen 2xl:w-1/2 2xl:h-auto"
  >
    <p className="absolute top-0 left-0 inline-block p-5 text-2xl font-thin text-left lg:p-10 sm:text-3xl text-primary-dark">
      {typeof props.nr != "string" ? "0" + props.nr : props.nr}.
    </p>

    <Link href={props.wip ? "#" : `${encodeURIComponent(props.src)}`}>
      <a className="mx-auto my-32">
        <motion.img
          className="h-64 sm:h-80 md:h-96 2xl:80"
          src={`${encodeURIComponent("img/" + props.src + "-index.png")}`}
          alt={props.imgAlt}
          whileHover={{
            scale: 1.1,
            y: -30,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            ease: "easeOut",
            duration: 0.2,
          }}
        />
      </a>
    </Link>

    <div className="absolute bottom-0 left-0 inline-block p-5 font-thin text-left lg:p-10 text-primary-dark">
      <p className="font-normal text-l sm:text-xl">{props.year}</p>
      {/*<p className="text-2xl font-normal">{props.location}</p>*/}
      <p className="text-xl font-medium sm:text-2xl md:text-3xl">
        {props.name}
      </p>
    </div>
    {link(props)}
  </div>
);

function link(props) {
  if (!props.wip) {
    return (
      <Link href={`${encodeURIComponent(props.src)}`}>
        <a className="absolute bottom-0 right-0 inline-block px-5 py-3 lg:p-10 text-primary-dark hover:text-primary">
          <svg
            width="60"
            height="48"
            viewBox="0 0 60 48"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto fill-current"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.4304 23.35L51.54 17.4596L52.4593 16.5404L59.9189 24L52.4593 31.4596L51.54 30.5404L57.4305 24.65L0 24.65V23.35L57.4304 23.35Z"
            />
          </svg>
        </a>
      </Link>
    );
  }
}

export default IndexProject;
