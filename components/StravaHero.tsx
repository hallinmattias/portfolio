import Link from "next/link";
interface Props {
  link?: boolean;
}
export default function StravaHero(props: Props) {
  return (
    <Link href={props.link ? "/spotify" : ""}>
      <div
        className={`relative w-full ${props.link && "cursor-pointer"}`}
        style={{
          height: "70vh",
          backgroundImage: "url('/img/strava/hero.jpg')",
          placeContent: "cover",
          backgroundPosition: "right",
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
        <div className="absolute bottom-0 right-0 px-12 py-6 text-right text-white">
          <span className="text-lg">February, 2020</span>
          <h1 className="text-5xl font-semibold text-opacity-75">Strava -</h1>
          <span className="text-2xl font-medium">
            App feature <br /> design challenge
          </span>
        </div>
      </div>
    </Link>
  );
}
