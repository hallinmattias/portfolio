import HelpmateHero from "../components/HelpmateHero";
import Body from "../components/Body";
import EmotionstarHero from "../components/EmotionstarHero";

export default function IndexPage() {
  return (
    <Body>
      <HelpmateHero link={true} />
      <EmotionstarHero link={true} />
    </Body>
  );
}
