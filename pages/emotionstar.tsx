import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitch from "../components/ProjectSwitch";
import useMeasure from "react-use-measure";

import H2 from "../components/H2";
import { H3 } from "../components/H2";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { url } from "inspector";

export default function EmotionStarPage() {
  const [ref, boundary] = useMeasure();
  const [warmupHover, setWarmupHover] = useState(false);
  const [gameHover, setGameHover] = useState(false);
  return (
    <Body>
      <EmotionstarHero />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-4 gap-6 px-6 mt-6"
      >
        <div className="col-span-5 space-y-3 md:col-span-3">
          <H2>Project in short</H2>
          <p>
            Emotion Star is a collaborative expression recognition game designed
            and developed to be a part of an interactive exhibition at
            Universeum, the national science center of Sweden. Press the play
            button to reach the live demo. Runs best in Chrome computer browser.
          </p>
        </div>

        <div className="flex items-center justify-center h-auto col-span-2 col-start-2 md:col-span-1 md:col-start-4">
          <Link href="https://emotion-star.vercel.app/">
            <a target="_blank">
              <motion.img
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                src="/img/emotionstar/play.png"
                className="w-full cursor-pointer"
              />
            </a>
          </Link>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 px-6 mt-6 md:grid-cols-2">
        <div className="space-y-3">
          <H2>Challange</H2>
          <p>
            The theme of the exhibition and the project was "Quantified self".
            The goal of the project was to raise teenagers interest for science
            by introducing AI in an innovative, fun and collaborative way.
          </p>
        </div>
        <div className="space-y-3">
          <H2>Contribution</H2>
          <p>
            My role in this project was UI/UX designer, gameplay designer and
            front-end developer. I was part a the project from developing the
            core concept to finalizing the idea and implementing the game. The
            game was built using the React.js framework Next.js, styled using
            tailwindcss and Firebase provides server back-end.
          </p>
        </div>
      </div>
      <div className="flex-col w-1/2 px-6 mx-auto mt-6 space-y-3">
        <H2>Result</H2>
        <p>
          The game is intended to push the boundaries of interactive methods,
          explore innovative combinations between collaboration & competitveness
          as well ass meassuring data and visualize it in a fun way.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-6 mt-6 md:grid-cols-2">
        <div className="col-span-1 space-y-3">
          <H3>Warm-up</H3>
          <p>
            The Emotion Star demo is currently primarily designed to lower the
            threshold of initiating the game at an exhibition. The interactions
            in the game is limited to five facial expressions that the build in
            AI recognise. The start screen will automaticly transition into a
            warm-up screen once two players has entered the "Play Area". The
            players have a chance of practicing the emotions before the actual
            game starts. The team is assigned a random emoji which will be shown
            if the score becomes a high score.
          </p>
        </div>
        <motion.div
          onHoverStart={() => {
            setWarmupHover(true);
          }}
          onHoverEnd={() => {
            setWarmupHover(false);
          }}
          ref={ref}
          className="self-center col-span-1 shadow-lg"
          style={{
            height: (boundary.width / 3578) * 1811,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${
              warmupHover
                ? "/img/emotionstar/warmup.gif"
                : "/img/emotionstar/warmup.png"
            })`,
          }}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 px-6 mt-6 md:grid-cols-2">
        <div className="self-center col-span-1 space-y-3 ">
          <H3>The Game</H3>
          <p>
            The players collectivly collect points by mimicing the requested
            expression. Perfect notes, notes hold it for the full duration,
            awards with extra points. The bonus is even higher if you manage to
            hit perfect at th same time as your team mate. The sound becomes
            muffled If the players struggles with hitting the notes.
          </p>
        </div>
        <motion.div
          onHoverStart={() => {
            setGameHover(true);
          }}
          onHoverEnd={() => {
            setGameHover(false);
          }}
          ref={ref}
          className="col-span-1 shadow-lg"
          style={{
            height: (boundary.width / 3578) * 1811,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${
              gameHover
                ? "/img/emotionstar/game.gif"
                : "/img/emotionstar/game.png"
            })`,
          }}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 px-6 mt-6 md:grid-cols-2">
        <div className="col-span-1 space-y-3">
          <H3>Statistics</H3>
          <p>
            When the song is finished the players are taken to the statistics
            screen. This screen presents the performance in various ways. The
            radar chart in the middle presents the accuracy of each player and
            the average. It is a collaborative game but in this way the
            individual contribution is visualized in a comparable way. More
            stats from each expression is accessible in the lower part of the
            screen. Holding an expression will uncover the accuracy in digits,
            the total time spent on that expression and a badge (depending on
            your performance). Finally there is a high score list showing the
            top 10 results.
          </p>
        </div>
        <motion.div
          onHoverStart={() => {
            setWarmupHover(true);
          }}
          onHoverEnd={() => {
            setWarmupHover(false);
          }}
          ref={ref}
          className="self-center col-span-1 overflow-hidden shadow-lg"
          style={{
            height: (boundary.width / 3360) * 2100,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url('/img/emotionstar/stats.png')",
          }}
        />
      </div>
      <div className="w-1/2 px-6 mx-auto mt-6">
        <p>Feel free to reach out if you want to know more!</p>
      </div>
      <ProjectSwitch right="Helpmate" />
    </Body>
  );
}
