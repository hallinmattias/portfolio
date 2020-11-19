import Link from "next/link";

interface Props {
  link?: boolean;
}
export default function HelpmateHero(props: Props) {
  return (
    <Link href={props.link ? "/helpmate" : ""}>
      <div className="h-auto">
        <div
          className={`relative w-full ${
            props.link &&
            "cursor-pointer h-vh-70 hover:bg-helpmate-700 transition duration-300 ease-in-out lg:bg-cover"
          }  bg-helpmate-600`}
          style={{
            height: "70vh",
            backgroundImage: `url("/img/helpmate/hero.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 right-0 hidden px-12 py-6 text-right text-white md:block">
            <p className="text-lg">April, 2020</p>
            <h1 className="text-5xl font-semibold">Helpmate -</h1>
            <p className="text-2xl font-medium">
              The community based <br /> service sharing app
            </p>
          </div>
        </div>
        <div className="px-6 pt-6 space-y-1 text-left md:hidden text-body">
          <p className="text-base">April, 2020</p>
          <h1 className="text-4xl font-semibold">Helpmate -</h1>
          <p className="text-xl font-medium">
            The community based service sharing app
          </p>
        </div>
      </div>
    </Link>
  );
}
