import Link from "next/link";

interface Props {}
export default function Navbar(props: Props) {
  return (
    <nav
      style={{
        height: "15vh",
      }}
      className="flex items-end justify-between w-full pb-2 text-primary-dark"
    >
      <p className="text-3xl font-semibold ">Mattias Hallin</p>
      <div className="space-x-6 text-xl font-medium">
        <Link href="/">
          <a className="hover:text-primary">Home</a>
        </Link>
        <Link href="/">
          <a className="hover:text-primary">Work</a>
        </Link>
        <Link href="/">
          <a className="hover:text-primary">About</a>
        </Link>
      </div>
    </nav>
  );
}
