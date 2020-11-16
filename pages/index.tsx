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
    </Body>
  );
}
