import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import H2 from "../components/H2";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-between md:h-vh-70 md:flex-row"
    >
      <img className="md:h-full h-96" src="/img/about-index.png" alt="" />
      <div className="flex flex-col items-center mx-auto text-center">
        <H2 className="my-6 text-4xl font-semibold md:my-0 md:mb-6">Hello!</H2>
        <p className="px-6">
          My name is Mattias, <br className="hidden md:block" /> I'm a MSc
          Student in <br className="hidden md:block" /> Interaction Design and{" "}
          <br className="hidden md:block" />
          Technologies with a BSc in <br className="hidden md:block" />{" "}
          Industrial Design Engineering.
        </p>
        <div className="self-center mt-6 space-x-6 md:mt-16 text-primary-dark">
          <a href="https://www.instagram.com/mattiashallin/">
            <FontAwesomeIcon
              className="hover:text-primary"
              size="2x"
              icon={["fab", "instagram"]}
            />
          </a>
          <a href="https://www.linkedin.com/in/mattias-hallin-594304177/">
            <FontAwesomeIcon
              className="hover:text-primary"
              size="2x"
              icon={["fab", "linkedin-in"]}
            />
          </a>
          <a href="https://github.com/hallinmattias">
            <FontAwesomeIcon
              className="hover:text-primary"
              size="2x"
              icon={["fab", "github"]}
            />
          </a>
          <a href="mailto:mattiashallin93@gmail.com">
            <FontAwesomeIcon
              className="hover:text-primary"
              size="2x"
              icon={["far", "envelope"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
