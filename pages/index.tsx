import HelpmateHero from "../components/HelpmateHero";
import Body from "../components/Body";
import EmotionstarHero from "../components/EmotionstarHero";
import SpotifyHero from "../components/SpotifyHero";
import StravaHero from "../components/StravaHero";

export default function IndexPage() {
  return (
    <Body>
      <EmotionstarHero link={true} />
      <HelpmateHero link={true} />
      <div className="grid grid-cols-2 gap-x-1">
        <StravaHero link={true} />
        <SpotifyHero link={true} />
      </div>
      <div
        id="about"
        className="flex items-center justify-between p-6 bg-white"
      >
        <div className="flex flex-col items-center mx-auto text-center">
          <h2 className="mb-6 text-4xl font-semibold">
            Hello, my name is <br /> Mattias
          </h2>
          <p className="">
            I'm a MSc Student in <br /> Interaction Design and <br />{" "}
            Technologies with a BSc in <br /> Industrial Design Engineering.
          </p>
        </div>
        <img className="h-96" src="/img/about-index.png" alt="" />
      </div>
    </Body>
  );
}
