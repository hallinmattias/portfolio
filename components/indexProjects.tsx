import { motion } from 'framer-motion';
import IndexProject from './indexProject'
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
      duration: 0.5 
    }}
    className="flex-grow lg:overflow-y-scroll lg:h-screen overscroll-contain pb-4"
  >
    <IndexProject 
      nr={x++} 
      year="wip" 
      name="In Your Face!" 
      location="Chalmers Interaction Design &amp; Technology" 
      src="emotionStar" 
      wip={true}
    />
    <IndexProject 
      nr={x++} 
      year="2020" 
      name="Helpmate" 
      location="Simon Fraser University" 
      src="helpmate"
    />
    <IndexProject 
      nr={x++} 
      year="2018" 
      name="Spotify iOS Redesign" 
      location="Chalmers University" 
      src="spotify"
    />
    <IndexProject 
      nr={x++} 
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

)
export default IndexProjects;
