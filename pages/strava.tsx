import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitch from "../components/ProjectSwitch";
import StravaHero from "../components/StravaHero";

export default function StravaPage() {
  return (
    <Body>
      <StravaHero />
      <ProjectSwitch left="Helpmate" right="Spotify" />
    </Body>
  );
}
