interface Props {
  children?: string;
  className?: string;
}
export default function H2(props: Props) {
  return (
    <h2
      className={`text-3xl md:text-3xl font-semibold text-body ${props.className}`}
    >
      {props.children}
    </h2>
  );
}

export function H3(props: Props) {
  return (
    <h3
      className={`text-xl md:text-2xl font-semibold text-body ${props.className}`}
    >
      {props.children}
    </h3>
  );
}
