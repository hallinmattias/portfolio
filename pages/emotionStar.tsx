import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitch from "../components/ProjectSwitch";

export default function EmotionStarPage() {
  return (
    <Body>
      <EmotionstarHero />
      <ProjectSwitch left="Helpmate" />
    </Body>
  );
}
