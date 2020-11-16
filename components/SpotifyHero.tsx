import Link from "next/link";
interface Props {
  link?: boolean;
}
export default function SpotifyHero(props: Props) {
  return (
    <Link href={props.link ? "/spotify" : ""}>
      <div
        className={`relative w-full ${props.link && "cursor-pointer"}`}
        style={{
          height: "70vh",
          backgroundImage: "url('/img/spotify/hero.jpg')",
          placeContent: "cover",
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`absolute p-8 flex top-0 right-0 w-full z-0 h-full bg-gradient-to-t bg-black bg-opacity-25 ${
            props.link &&
            "hover:bg-opacity-50 transition duration-300 ease-in-out"
          }`}
        >
          <img
            className={`self-start ${
              props.link ? "w-full" : "w-2/3"
            } justify-self-start`}
            src="/img/spotify/banner.png"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 right-0 px-12 py-6 text-right text-white">
          <span className="text-lg">January, 2018</span>
          <h1 className="text-5xl font-semibold text-opacity-75">Spotify -</h1>
          <span className="text-2xl font-medium">
            Usability research and <br /> application redesign
          </span>
        </div>
      </div>
    </Link>
  );
}
