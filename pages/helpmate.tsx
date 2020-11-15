import useMeasure from "react-use-measure";
import HelpmateHero from "../components/HelpmateHero";
import Body from "../components/Body";
import ProjectSwitch from "../components/ProjectSwitch";
import ProjectSwitchRight from "../components/ProjectSwitchRight";

export default function HelpmatePage() {
  const [ref, bounds] = useMeasure();
  return (
    <Body>
      <div className="space-y-6 bg-white">
        <HelpmateHero />
        <div
          className="flex items-center w-full px-6"
          style={{
            //height: "70vh",
            backgroundImage: `url("/img/helpmate/man.svg")`,
            backgroundColor: "",
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-7/12 py-16 ml-auto">
            <h2 className="text-4xl font-semibold text-primary-dark">
              Challenge
            </h2>
            <p className="py-4 text-base">
              For some demographics, such as people with disabilities and
              seniors, household chores can be an incredible burden. However,{" "}
              <span className="font-semibold">
                they may not have the money to hire a professional and/or feel
                hesitant about inviting a stranger into their home.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full px-6">
        <h2 className="mb-6 text-4xl font-semibold text-primary-dark">
          Market Opportunity
        </h2>
        <img src="/img/helpmate/market.svg" alt="" />
      </div>

      <div className="flex flex-col w-full p-6 pb-12 bg-white">
        <h2 className="text-4xl font-semibold text-primary-dark">
          Design Principles
        </h2>
        <div className="grid grid-cols-12 gap-6 pt-2">
          <div className="col-span-4">
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

          <div className="col-span-4">
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

          <div className="col-span-4">
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

      <div
        className="flex items-center w-full px-6 mt-6"
        style={{
          //height: "70vh",
          backgroundImage: `url("/img/helpmate/woman.svg")`,
          backgroundColor: "",
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-7/12 py-12 mr-auto">
          <h2 className="text-4xl font-semibold text-primary-dark">Result</h2>
          <p className="py-4 text-base">
            HelpMate is a community-based task finding application that allows
            you to help their community members with household chores. The app
            provides an easy way for young people to connect with their
            communities while simultaneously earning some money or volunteer
            hours to put towards their education.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-6">
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

      <div className="w-full"></div>

      <div className="w-full"></div>
      <ProjectSwitch right="Emotionstar" />
    </Body>
  );
}
