import Link from "next/link";

interface Props {
  link?: boolean;
}
export default function HelpmateHero(props: Props) {
  return (
    <Link href={props.link ? "/helpmate" : ""}>
      <div
        className={`relative w-full ${
          props.link &&
          "cursor-pointer hover:bg-helpmate-700 transition duration-300 ease-in-out"
        }  bg-helpmate-600`}
        style={{
          height: "70vh",
          backgroundImage: `url("/img/helpmate/hero.png")`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bottom-0 right-0 px-12 py-6 text-right text-white">
          <span className="text-lg">April, 2020</span>
          <h1 className="text-5xl font-semibold">Helpmate -</h1>
          <span className="text-2xl font-medium">
            The community based <br /> service sharing app
          </span>
        </div>
      </div>
    </Link>
  );
}
