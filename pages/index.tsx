import HelpmateHero from "../components/HelpmateHero";
import Body from "../components/Body";
import EmotionstarHero from "../components/EmotionstarHero";
import SpotifyHero from "../components/SpotifyHero";
import StravaHero from "../components/StravaHero";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import About from "../components/About";

export default function IndexPage() {
  return (
    <Body space={true}>
      <EmotionstarHero link={true} />
      <HelpmateHero link={true} />
      <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2 md:gap-x-1">
        <StravaHero link={true} />
        <SpotifyHero link={true} />
      </div>
      <About />
    </Body>
  );
}
