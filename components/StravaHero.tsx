import Link from "next/link";
interface Props {
  link?: boolean;
}
export default function StravaHero(props: Props) {
  return (
    <Link href={props.link ? "/strava" : ""}>
      <div>
        <div
          className={`relative w-full ${props.link && "cursor-pointer"}`}
          style={{
            height: "70vh",
            backgroundImage: "url('/img/strava/hero.jpg')",
            placeContent: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={`absolute flex top-0 right-0 w-full z-0 h-full bg-black bg-opacity-0 ${
              props.link &&
              "hover:bg-opacity-25 transition duration-300 ease-in-out"
            }`}
          ></div>
          <div className="absolute bottom-0 right-0 hidden px-12 py-6 text-right text-white md:block">
            <p className="text-lg">February, 2020</p>
            <h1 className="text-5xl font-semibold text-opacity-75">Strava</h1>
            <p className="text-2xl font-medium">
              App feature <br /> design challenge
            </p>
          </div>
        </div>
        <div className="px-6 pt-6 space-y-1 text-left text-body md:hidden">
          <p className="text-base">February, 2020</p>
          <h1 className="text-4xl font-semibold text-opacity-75">Strava</h1>
          <p className="text-xl font-medium">App feature design challenge</p>
        </div>
      </div>
    </Link>
  );
}
