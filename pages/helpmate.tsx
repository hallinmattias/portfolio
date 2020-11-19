import useMeasure from "react-use-measure";
import HelpmateHero from "../components/HelpmateHero";
import Body from "../components/Body";
import ProjectSwitch from "../components/ProjectSwitch";
import H2 from "../components/H2";
import Image from "next/image";

export default function HelpmatePage() {
  const [ref, bounds] = useMeasure();

  const [refMan, boundsMan] = useMeasure();
  return (
    <Body>
      <div className="space-y-0">
        <HelpmateHero />
        <div className="w-full p-6">
          <H2>Project in short</H2>
          <p className="py-4">
            Helpmate was created as a part of the Interface Design course at
            Simon Fraser University, Vancouver. The needs and requirments of two
            major stakeholders was analyzed in order to create an intuitive user
            flow and a consistent design system. Usability testing was carried
            out to ensure that the quality of the the experience meet the
            complex needs.
          </p>
        </div>

        <div className="flex flex-col items-center w-full px-6 md:flex-row-reverse ">
          <div className="w-full mr-auto md:w-8/12 ">
            <H2>Challenge</H2>
            <p className="py-4 text-base">
              For some demographics, such as people with disabilities and
              seniors, household chores can be an incredible burden. However,
              they may not have the money to hire a professional and/or feel
              hesitant about inviting a stranger into their home.
            </p>
          </div>
          <div
            className="w-full h-56 bg-left-bottom md:h-80 md:w-80"
            style={{
              backgroundImage: `url("/img/helpmate/man.svg")`,
              backgroundColor: "",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col w-full p-6 ">
        <H2 className="mb-6">Market Opportunity</H2>
        <img src="/img/helpmate/market.svg" alt="" />
      </div>

      <div className="flex flex-col w-full p-6">
        <H2>Design Principles</H2>
        <div className="grid grid-cols-1 gap-6 pt-2 lg:grid-cols-3">
          <div className="col-span-1">
            <h3 className="py-2 text-2xl font-semibold text-primary-dark">
              Safety and Trust
            </h3>
            <p className="text-base">
              Unlike Craigslist, HelpMate is a user-verified service that allows
              both Helpers and Clients to see each other’s profiles and ratings.
              This ensures that both parties are aware of the other’s behaviours
              and instills a sense of assurance for the completion of a task.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="py-2 text-2xl font-semibold text-primary-dark">
              Flexibility and Support
            </h3>
            <p className="text-base">
              Students may find it hard to commit to a traditional part-time job
              due to fluctuating schedules. HelpMate’s scheduling flexibility
              allows Helpers and Clients to organize an task without the
              rigidity of a formal job.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="py-2 text-2xl font-semibold text-primary-dark">
              Community
            </h3>
            <p className="text-base">
              We believe there’s more to the relationship between Helpers and
              Clients than merely monetary exchange. HelpMate seeks to connect
              different individuals in the community through helping each other
              and encourages building relationships.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full px-6 md:flex-row">
        <div className="w-full mr-auto md:w-8/12 ">
          <H2>Result</H2>
          <p className="py-4 text-base">
            HelpMate is a community-based task finding application that allows
            you to help their community members with household chores. The app
            provides an easy way for young people to connect with their
            communities while simultaneously earning some money or volunteer
            hours to put towards their education.
          </p>
        </div>
        <div
          className="w-full h-56 bg-right-bottom md:h-80 md:w-80"
          style={{
            backgroundImage: `url("/img/helpmate/woman.svg")`,
            backgroundColor: "",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="grid w-full grid-cols-1 gap-1 px-1 mt-1 lg:px-0 lg:grid-cols-2">
        <img className="w-full" src="/img/helpmate/app-1.svg" alt="" />
        <img src="/img/helpmate/app-2-lg.jpg" alt="" />
        <img src="/img/helpmate/app-3.jpg" alt="" />
        <img src="/img/helpmate/app-4.jpg" alt="" />
        <div className="col-span-1 col-start-1" ref={ref}>
          <iframe
            width={bounds.width}
            height={(bounds.width / 16) * 9}
            src="https://www.youtube-nocookie.com/embed/yHZJIugjNd4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <img src="/img/helpmate/style.jpg" alt="" />
      </div>
      <ProjectSwitch left="Emotionstar" right="Strava" />
    </Body>
  );
}
