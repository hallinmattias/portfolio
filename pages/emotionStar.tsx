import Link from "next/link";
import Nav from "../components/PageHead";
import IndexHeader from "../components/IndexHeader";
import IndexProjects from "../components/IndexProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmotionstarHero from "../components/EmotionstarHero";

export default function EmotionStarPage() {
  return (
    <div className="">
      <EmotionstarHero />
      <h1 className="text-4xl font-medium text-left text-accent-1">
        Emotion Star
      </h1>
    </div>
  );
}
