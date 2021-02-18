import Link from "next/link";

interface Props {}
export default function Footer(props: Props) {
  return (
    <div
      style={{
        height: "15vh",
      }}
      className="flex items-center justify-center w-full justify-self-end text-primary-dark"
    >
      <p className="text-sm font-thin">© Mattias Hallin, 2021.</p>
    </div>
  );
}
