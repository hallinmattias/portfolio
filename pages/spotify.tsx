import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitch from "../components/ProjectSwitch";
import SpotifyHero from "../components/SpotifyHero";

export default function SpotifyPage() {
  return (
    <Body>
      <SpotifyHero />
      <ProjectSwitch left="Strava" />
    </Body>
  );
}
