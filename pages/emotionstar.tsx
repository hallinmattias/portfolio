import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitch from "../components/ProjectSwitch";
import useMeasure from "react-use-measure";

export default function EmotionStarPage() {
  const [ref, boundary] = useMeasure();
  return (
    <Body>
      <EmotionstarHero />
      <div ref={ref} className="w-full h-16"></div>

      <ProjectSwitch right="Helpmate" />
    </Body>
  );
}
