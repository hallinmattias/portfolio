import EmotionstarHero from "../components/EmotionstarHero";
import Body from "../components/Body";

import ProjectSwitch from "../components/ProjectSwitch";
import SpotifyHero from "../components/SpotifyHero";
import Image from "next/image";

import H2 from "../components/H2";
import { H3 } from "../components/H2";

export default function SpotifyPage() {
  return (
    <Body>
      <SpotifyHero />
      <div className="w-full px-6 py-3 text-left md:p-6 md:text-center">
        <div className="max-w-md mx-auto space-y-3">
          <H3>The Queue People Want to Join</H3>
          <p>
            8 week project as a part of the course MMT031 Usability Engineering
            provided by the faculty of Design & Human Factors at Chalmers
            University, Gothemburg.
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center w-full space-y-3 text-left md:space-y-0 md:py-12 text-body md:flex-row">
        <div className="flex-1 px-6 space-y-3 ">
          <H3 className="">Usefullness, regardless of skill</H3>
          <p>
            The Purpose of the project was to dig deep into the different
            features and functions of Spotifys iOS application in a Usability
            perspective to make it easier for the users to use regardless of
            previous app or technology experience.
          </p>
        </div>
        <div className="flex-1 px-6 space-y-3 ">
          <H3>Improving affordance by enhancing clarity</H3>
          <p>
            The goal of the project was to, from user perspective, clarify the
            interface in Spotify app to increase the understandance of different
            functions for a more broad audience.
          </p>
        </div>
      </div>
      <div className="p-6 space-y-3 ">
        <H2>Background</H2>
        <p className="gap-6 col-count-1 lg:col-count-2">
          Spotify iOS is a music streaming application built of multiple
          features and functions to allow streaming of desired music. The search
          function is used to find tracks, artists, albums etc. The service also
          allows the user to create and share different playlists. If the user
          want to avoid choosing song continually, without creating a playlist,
          it is possible to queue songs. Desired songs are found, added to the
          queue and played continuosly. The user has the possibility to edit the
          queue and when the queue is empty Spotify automaticly continues to
          play similar songs. This feature is popular at parties, different
          people queue their favorite songs but every now and then there is a
          person who either conciously or accidently changes the song. This
          project was executed right before Spotify made a thorough make over of
          the UI, Spotify release animated album covers and a glimpse of the new
          UI as the project was going.
        </p>
      </div>
      <div className="flex flex-col flex-wrap items-center w-full md:items-start md:flex-row">
        <div className="flex-1 px-6 space-y-3">
          <H2>Theoretical Evaluation</H2>
          <p>
            Multiple theoretical evaluation methods were used to find possible
            problems in the scenario of creating and listening to a playlist.
            Heuristic task analysis was made to map out the different parts of
            the interaction. A cognitive walkthrough and a predictive error
            analysis was carried out afterwards to get further into the details
            of the different sub goals. The results were used as a theoretical
            basis to to analyze the different errors a user might do in the
            different steps. The methods gave a concrete picture of the problems
            of the app and used as a basis for the empirical testing. The same
            methods were used on the re-design for validation purposes.
          </p>
          <p>
            The gestalt laws, Jordans 10 principles of usable design and Normans
            design principles were used as key references and human machine
            system guidelines in the theoretical evaluation along with Steven
            Hoobers principles regarding reachability and the thumb zone.
          </p>
        </div>
        <img className="h-full" src="/img/spotify/thumbzone.png" alt="" />
      </div>
      <div className="w-full p-6 bg-body">
        <img src="/img/spotify/hta.png" alt="" />
      </div>
      <div className="flex flex-wrap justify-center p-6 space-y-3 lg:flex-nowrap lg:space-y-0">
        <div className="flex flex-col justify-center w-full space-y-3 lg:w-1/2">
          <h2 className="text-3xl font-semibold">Empirical evaluation</h2>
          <h3 className="text-xl font-semibold dont">Pilot study</h3>
          <p>
            The empirical evuluation started pilot study to confirm some of the
            results from the theoretical evaluation and provide more data for
            the design of the usability test. Multiple persons, both experienced
            and new users, were asked to explain the functions and consequences
            of different buttons and icons.
          </p>
        </div>
        <img className="mx-6 lg:w-1/2" src="/img/spotify/pilot.png" alt="" />
      </div>
      <div className="grid grid-cols-1 gap-12 px-6 pb-6 place-items-center lg:grid-cols-2">
        <img className="" src="/img/spotify/pilot-right.png" alt="" />
        <img className="" src="/img/spotify/pilot-certain.png" alt="" />
      </div>
      <div className="p-6 space-y-3 ">
        <h3 className="text-xl font-semibold">Usability Testing</h3>
        <p className="gap-6 col-count-1 lg:col-count-2">
          Spotify iOS is a music streaming application built of multiple
          features and functions to allow streaming of desired music. The search
          function is used to find tracks, artists, albums etc. The service also
          allows the user to create and share different playlists. If the user
          want to avoid choosing song continually, without creating a playlist,
          it is possible to queue songs. Desired songs are found, added to the
          queue and played continuosly. The user has the possibility to edit the
          queue and when the queue is empty Spotify automaticly continues to
          play similar songs. This feature is popular at parties, different
          people queue their favorite songs but every now and then there is a
          person who either conciously or accidently changes the song. This
          project was executed right before Spotify made a thorough make over of
          the UI, Spotify release animated album covers and a glimpse of the new
          UI as the project was going.
        </p>
      </div>
      <div className="px-6 py-0 space-y-3 md:py-6 text-body">
        <h2 className="text-3xl font-semibold ">Research Findings</h2>
        <p className="gap-6 col-count-1 lg:col-count-2">
          The evaluation of the icons matched pretty well between the pilot
          study and the first usability test. Many users had problems
          understanding what the play queue icon was along with the plus icon
          that adds songs to your library. Users were also uncertain where the
          songs was saved by pressing it. In the tested scenarios a few users
          had initial trouble searching for a song but everyone managed to do it
          without help. Adding the song to the play queue was relatively
          obvious. All users reached for the “three dot” menu to the right and
          finds the “Add to play queue” button. This task could, how ever, be
          done in two ways. Either through the menu or swiping to the right, no
          user knew about the latter. Finding the play queue was a struggle for
          most of the users. Some tried to reach it through the same menu as the
          previous task. To reach the play queue the users first have ot open
          the playback UI which half of the users needed assistance with. Four
          users did not reach the goal at all. To rearange the song in the play
          queue the user is required to pull the song by the symbol placed to
          the far right of each song. The icon is mistaken as a hamburger menu
          and manu users tries to push it without response. Some selects the
          song by the cricle to the right and thinks marking it will affect the
          order. One user accidently started a song from the queue. Common
          problems in the last task as in task 4 when the users are asked to
          remove a song.
          <div className="float-right w-full px-6 pt-6 mt-6 bg-body">
            <img
              className="w-full"
              src="/img/spotify/tested-scenarios.png"
              alt=""
            />
          </div>
        </p>
      </div>
      <h2 className="px-6 pt-6 text-3xl font-semibold ">Redesign</h2>
      <div className="grid justify-center grid-cols-2 gap-6 p-6 md:grid-cols-4 lg:flex-nowrap lg:space-y-0">
        <img className="shadow-lg" src="/img/spotify/old-cover.jpg" alt="" />
        <img className="shadow-lg" src="/img/spotify/old-animated.jpg" alt="" />
        <div className="flex flex-col justify-center w-full col-span-2 space-y-3">
          <h3 className="text-xl font-semibold dont">Starting Point</h3>
          <p>
            The redesign is based on the current playback interface but is
            inspired by the newly released playback with animated album covers.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center px-6 py-0 md:py-6 md:flex-nowrap md:space-y-0">
        <div className="flex flex-col justify-center w-full col-span-2 space-y-3 md:pr-6">
          <h3 className="text-xl font-semibold dont">The Playback UI</h3>
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
        <img
          className="w-3/4 mt-6 shadow-lg sm:w-64"
          src="/img/spotify/uppspelning-redesign.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center w-full col-span-2 p-6 space-y-3 ">
        <h3 className="text-xl font-semibold dont">Redesigned Queue</h3>
        <p className="gap-6 col-count-1 lg:col-count-2">
          The redesigned play queue appears as a modal pop-up from the bottom of
          the screen when the “Play Queue” button is pressed. The playback is
          slightly visible in the background. It says “Play Queue” at the top
          and a clear all button is located at the top right. The currently
          playing song is colored green nd located at the top of the screen. The
          following song is next to it, but white. A bin button is placed next
          to each song the songs can now be removed with one click instead of
          two. The symbol for drag and drop is changed to one with more visual
          ques. The UI will show five upcoming songs, the sixth will be barely
          visible to provide visual ques of the possibility of scrolling. Songs
          can no longer be started by pressing them to reduce the risk of
          interupting the current song accidently. To get back to the playback
          screen the user either tap outside the modal screen or on the arrow in
          the upper left.
        </p>
      </div>
      <div className="">
        <div className="flex justify-center w-full max-w-3xl p-6 mx-auto ">
          <img
            className="w-2/5 h-auto shadow-lg"
            src="/img/spotify/old-queue.jpg"
            alt=""
          />

          <div className="p-6 my-auto">
            <img src="/img/icons/arrow-right-large.png" className="" alt="" />
          </div>
          <img
            className="w-2/5 h-auto shadow-lg"
            src="/img/spotify/new-queue.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-6 space-y-6 md:flex-nowrap md:space-x-6 md:space-y-0">
        <img
          className="hidden w-3/5 shadow-lg sm:w-48 md:block"
          src="/img/spotify/new-homescreen.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center w-full col-span-2 space-y-3 md:pr-6">
          <h3 className="text-xl font-semibold dont">Home Screen</h3>
          <p>
            To not refine the home screen UI was a limitation made early in the
            project but since the user reach the playback UI from this screen
            some modification were made. The song is still visible in the
            minified playback screen at the bottom of the screen. Previously it
            only said “Devices available” but now there is also an icon for the
            “Play queue” that indicates that whene there is a song in the queue
            and how many.
          </p>
        </div>
        <img
          className="w-3/5 shadow-lg md:w-3/5 sm:w-48 md:hidden"
          src="/img/spotify/new-homescreen.jpg"
          alt=""
        />
      </div>
      <div className="px-6 py-0 space-y-3 md-py6 ">
        <h2 className="text-3xl font-semibold ">Validation</h2>
        <div className="gap-6 space-y-3 col-count-1 lg:col-count-2">
          <p>
            A new set of user studies were held to test the redesign against the
            original app. Half of the testers were new and half were recurring.
            In that way both reliability and validity can be evaluated.
          </p>
          <p>
            In the evaluation of the new icons it was the misinterpretation of
            the “Play queue” that was changed the most, form 45% to 8%. The plus
            icon is gone in the new interface and the other icons remained the
            same, and so did the result from thoose.
          </p>
          <p>
            The redesign of the interface did not affect the first two scenarios
            and the result from those also remained the same. For the third
            task, finding the “Play queue”, the result was much better then the
            first test, some users tried to find it under the “Your library”
            tab. Changing the order in the “Play queue” turned out better then
            the first test but many users still had a lot of problem to finish
            the task. The last task, removing a song, also had a much better
            result compared to the first test.
          </p>
        </div>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 space-y-3">
          <h2 className="text-3xl font-semibold ">Final Improvements</h2>
          <p>
            The redesign of the “Play queue” resultet in better usability then
            the original but to improve it even further we investigated the
            micro interactions of the drag and drop function. In the final test
            users still tries to press the icon, visual ques as small animations
            are added to the icon. If the user taps on the name of the song the
            arrows of the icon will move out and fade back to pull the attention
            of the user. The item will lifts up slightly from the other items
            when the icon is tapped, that provides the user the visual cues of
            it being a drag and dropable element.
          </p>
        </div>
        <div className="grid grid-cols-2 col-span-1 gap-6 lg:col-span-2">
          <img className="" src="/img/spotify/new-handle-cue.png" alt="" />
          <img className="" src="/img/spotify/new-drag-cue.png" alt="" />
        </div>
      </div>
      <ProjectSwitch left="Strava" />
    </Body>
  );
}
