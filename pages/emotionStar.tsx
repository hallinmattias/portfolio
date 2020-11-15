import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitchLeft from "../components/ProjectSwitchLeft";

export default function EmotionStarPage() {
  return (
    <Body>
      <EmotionstarHero />
      <ProjectSwitchLeft left="Helpmate" />
    </Body>
  );
}
