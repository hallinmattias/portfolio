import Link from "next/link";
interface Props {
  link?: boolean;
}
export default function EmotionstarHero(props: Props) {
  return (
    <Link href={props.link ? "/emotionstar" : ""}>
      <div
        className={`relative w-full ${props.link && "cursor-pointer"}`}
        style={{
          height: "70vh",
          backgroundImage: "url('/img/emotionstar/hero.gif')",
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
        >
          <img
            className="self-center w-1/3 mx-auto justify-self-center"
            src="/img/emotionstar/logo.svg"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 right-0 px-12 py-6 text-right text-white">
          <span className="text-lg">October, 2020</span>
          <h1 className="text-5xl font-semibold text-opacity-75">
            Emotion Star -
          </h1>
          <span className="text-2xl font-medium">
            The innovative facial expression <br /> recognition game
          </span>
        </div>
      </div>
    </Link>
  );
}
