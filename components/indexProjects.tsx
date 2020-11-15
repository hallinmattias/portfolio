import { motion } from "framer-motion";

import IndexProject from "./IndexProject";
var x = 1;
const IndexProjects = () => (
  <motion.div
    initial={{
      opacity: 0,
      translateY: 50,
    }}
    animate={{
      opacity: 1,
      translateY: 0,
    }}
    transition={{
      delay: 0.4,
      duration: 0.5,
    }}
    className="flex flex-col flex-grow pb-4 2xl:flex-row 2xl:flex-wrap lg:overflow-y-scroll lg:h-screen overscroll-contain"
  >
    <IndexProject
      nr={1}
      year="2020"
      name="Emotion Star"
      location="Chalmers Interaction Design &amp; Technology"
      src="emotionstar"
    />
    <IndexProject
      nr={2}
      year="2020"
      name="Helpmate"
      location="Simon Fraser University"
      src="helpmate"
    />
    <IndexProject
      nr={3}
      year="2018"
      name="Spotify iOS Redesign"
      location="Chalmers University"
      src="spotify"
    />
    <IndexProject
      id="4"
      nr={4}
      year="2020"
      name="Strava Team Challenges"
      location="Simon Fraser University"
      src="strava"
    />
    <IndexProject
      nr="About"
      name="Mattias Hallin"
      year="Gothenburg, Sweden"
      location="Gothenburg, Sweden"
      src="about"
    />
  </motion.div>
);
export default IndexProjects;
