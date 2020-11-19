import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitch from "../components/ProjectSwitch";
import StravaHero from "../components/StravaHero";

import H2 from "../components/H2";
import { H3 } from "../components/H2";

export default function StravaPage() {
  return (
    <Body>
      <StravaHero />
      <div className="w-full px-6 pb-3 text-left md:p-6 md:text-center">
        <div className="max-w-md mx-auto space-y-6">
          <H2 className="hidden md:block">Strava Team Challenges</H2>
          <p>
            3 week app feature case as a part of the the course IAT334 Interface
            Design provided by School of Interactive Arts & Technology at Simon
            Fraser University in Vancouver, BC.
          </p>
        </div>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 p-6 space-y-6 md:grid-cols-2 md:space-y-0">
        <img
          className="w-1/2 mx-auto shadow-lg"
          src="/img/strava/feed.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center w-full col-span-1 space-y-3">
          <H2>Background</H2>
          <p>
            The playback UI has some minor changes to increase the usability.
            The plus icon is moved to the “three dot” menu on the right side,
            few of the testers knew or understood the purpose of the button and
            the ones who did rarely used it. In the menu screen the purpose is
            clarified by copy. In the menu the add to library button will be
            accompanied by features such as: add to play queue, add to playlist,
            share, go to radio, show album, show artist report explicit content,
            creators, etc. The playqueue itself is no longer reached through
            this menu, it is instead reached from a direct button at bottom left
            of the screen, next to the “Available units” menu. The buttons will
            turn green when active as the “Available units” curently does.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
        <div className="flex flex-col justify-center w-full col-span-1 space-y-3 md:mb-auto">
          <H2>Ethnography</H2>
          <p>
            The research was focused on understanding how the users use the app
            and why they choose it in favor of other apps to find its unique
            selling points. Semi-structured interviews was carried out with
            individuals who have regular fitness routines. The questions focused
            on asking individuals about their fitness routines and exercise
            motivations/behaviours. Many Strava users are attracted to the
            social platform that differs from its competitors.
          </p>
        </div>
        <div className="flex flex-col justify-center w-full col-span-1 space-y-3">
          <H2>Defining</H2>
          <p>
            Strava brings athletes closer by sharing workout activities.
            However, most activities and challenges are completed individually,
            with social involvement only after you share a post or activity.
            Some athletes are motivated by knowing and seeing other people
            participating in the same activities, and through social feedback
            such as likes and comment on their activities. Many athletes want to
            keep track of their personal progress. Some share their progress
            with their friends to receive social motivation, while others track
            it for personal motivation.
          </p>
        </div>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 p-6 space-y-6 md:grid-cols-2 md:space-y-0">
        <img
          className="w-full mx-auto shadow-lg"
          src="/img/strava/mapping.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center w-full col-span-1 space-y-3">
          <H2>Ideation</H2>
          <p>
            Inside Strava users can set goals and challenge each other on
            different challenges. Our work continued with ideation on how a new
            feature could benefit from the social platform to make the social
            interactions in the app even more attractive. Many features in the
            app that include interactions between users are competitive between
            the users.
          </p>
        </div>
      </div>
      <div className="p-6">
        <img
          className="w-full mx-auto shadow-lg md:w-3/5"
          src="/img/strava/sketches.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center w-full col-span-1 p-6 space-y-3 md:w-1/2">
        <H2>Result</H2>
        <p>
          We wanted our feature to improve the social experience of the app and.
          Our final concept leveraged on the social platform and allowed the
          users work together instead of competing against each other. We call
          the feature Team Challenges. Users can group up and pick a fitting
          challenge to work on together.
        </p>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 p-6 space-y-6 grid-flow-dense md:grid-cols-2 md:space-y-0">
        <img
          className="w-1/2 mx-auto shadow-lg md:hidden"
          src="/img/strava/challenge.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center w-full col-span-1 space-y-3">
          <H3>Challenges</H3>
          <p>
            We leveraged the existing Challenges feature as an opportunity to
            create a collaborative team-based activity and encourage users to
            utilize the social interactions in Strava.
          </p>
        </div>
        <img
          className="hidden w-1/2 mx-auto shadow-lg md:block"
          src="/img/strava/challenge.jpg"
          alt=""
        />
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 p-6 space-y-6 md:grid-cols-2 md:space-y-0">
        <img className="w-1/2 mx-auto" src="/img/strava/team.png" alt="" />
        <div className="flex flex-col justify-center w-full col-span-1 space-y-3">
          <H3>Strava Team Challenges</H3>
          <p>
            eam Challenges allow users to motivate each other in reaching a
            common goal. Users can create custom teams, see activity from their
            teammates, and send encouragement to help motivate each other.
          </p>
        </div>
      </div>
      <div className="">
        <img className="w-full mx-auto" src="/img/strava/result.png" alt="" />
      </div>
      <div className="flex flex-col justify-center w-full col-span-1 p-6 space-y-3">
        <H3>Scalability and implementation</H3>
        <p className="gap-6 col-count-1 lg:col-count-2">
          The components of the design are easily scaled and modified based on
          desired user experience: types of activities in challenge, number of
          team members, cheers UI, etc. <br /> The feature is feasible because
          we leveraged mostly on existing interaction and UI patterns.
          Developing this feature will therefore require less resources such as
          manpower and money.
        </p>
      </div>

      <ProjectSwitch left="Helpmate" right="Spotify" />
    </Body>
  );
}
