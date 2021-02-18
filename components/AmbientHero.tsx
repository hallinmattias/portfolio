import Link from "next/link";
import { useState } from "react";
interface Props {
  link?: boolean;
}
export default function AmbientHero(props: Props) {
  const [hover, setHover] = useState(false);
  return (
    <Link href="https://ambient-atmospheres.com/">
      <div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`relative w-full bg-contain bg-center ${
            props.link && "cursor-pointer"
          }`}
          style={{
            height: "70vh",
            // backgroundColor: "#F3F0EC",
            // backgroundImage: "url('/img/ambient/logo.svg')",
            // placeContent: "cover",
            // backgroundPosition: "center",
            // backgroundSize: "contain",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 right-0 z-0 flex w-full h-full bg-black bg-opacity-0">
            <img
              className={`"self-center w-3/4 mx-auto transform transition duration-300 md:w-1/3 ease-in-out ${
                hover && "scale-150"
              } justify-self-center"`}
              src="/img/ambient/logo.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-0 right-0 hidden px-12 py-6 text-right text-body md:block">
            <p className="text-lg"> </p>
            <h1 className="mb-2 text-5xl font-semibold text-opacity-75">
              Ambient <br /> Atmospheres
            </h1>
            <p className="text-2xl font-medium">Topology of Light</p>
          </div>
        </div>
        <div className="px-6 pt-6 space-y-1 text-left text-body md:hidden">
          <p className="text-base"> </p>
          <h1 className="text-4xl font-semibold text-opacity-75">
            Ambient Atmospheres
          </h1>
          <p className="text-xl font-medium">Topology of Light</p>
        </div>
      </div>
    </Link>
  );
}
