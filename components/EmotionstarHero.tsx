export default function EmotionstarHero() {
  return (
    <div
      style={{
        backgroundImage: "url('/img/emotionstar-hero.gif')",
        placeContent: "cover",
      }}
      className="relative flex w-screen h-screen bg-cover"
    >
      <img src="/img/emotionstar-logo.svg" alt="" />
    </div>
  );
}
