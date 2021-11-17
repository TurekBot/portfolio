import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function Scrava(props) {
  return (
    <>
      <ArtifactStory
        title="Scrava"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <figure style={{ width: "50%", float: "right" }}>
          <img
            src="/images/scrava-leaderboard.png"
            
          />
          <figcaption>The final leaderboard created by Scrava.</figcaption>
        </figure>
        <p>
          Allow me to set the scene. My <b>Mom's 50th</b> birthday is coming up.
          She wants to do a big <b>bike relay</b> with the whole family. But no
          one's in shape. What do you do?
        </p>
        <p>
          My answer: stoke the competition by creating a family leaderboard.
        </p>
        <p>
          I'm getting ahead of myself: S<u>t</u>rava is a <b>fitness</b>{" "}
          tracking <b>app</b> popular among cyclists. The bike relay my mom
          wanted to do had about 21 legs. Your team switches riders at each pit
          stop.
        </p>
        <p>
          With three months until the race, my idea was to have everyone create
          a Strava account and log their training. The <b>prize</b>? Each
          month's winner got to <b>pick</b> their <b>legs</b>—everyone else got
          assigned legs. And considering that some legs had 2000ft of elevation
          gain and others had 0ft, the stakes were officially raised.
        </p>
        <p>
          One problem: Strava had <b>no</b> personalized leaderboards or{" "}
          <b>API</b> to get user statistics. That's when I thought to create S
          <u>c</u>rava: a <b>scraper</b> for Strava.
        </p>
        <p>
          Basically, I told Scrava to login as me, go look my family's accounts,
          scrape off the relevant statistics, and put together a little
          leaderboard.
        </p>
        <p>
          I wish I could say it was that simple, but it was not. I'll spare you
          the details, but suffice it to say that I spent a lot of time tweaking
          it and dealing with timing problems because the page didn't always
          load at the same speed. It was an ad-hoc solution and not terribly
          elegant, but it got the job done.
        </p>
        <p>
          Regardless, the <b>leaderboard</b> did prove effective: my father,
          least-expected of all, secured his spot in the "Hall of Champions" in
          the final month of the competition and we all had a <b>great time</b> at the
          relay.
        </p>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Browser Automation</li>
        <li>Problem Solving</li>

        <h4>Technologies</h4>
        <li>Java</li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Gradle#:~:text=Gradle%20is%20a%20build%20automation%20tool&text=compilation%20and%20packaging%20to%20testing%2C%20deployment%2C%20and%20publishing">
            Gradle
          </a>
        </li>
        <li>
          <a href="https://www.vogella.com/tutorials/SpringBoot/article.html">
            Spring Boot
          </a>
        </li>
        <li>
          <a href="https://www.autohotkey.com/">AutoHotkey</a>
        </li>
        <li>
          <a href="https://youtu.be/2ReR1YJrNOM">Git</a>
        </li>
        <li>
          <a href="https://www.selenium.dev/">Selenium</a>
        </li>
        <li>HTML</li>
        <li>CSS</li>
      </SkillsNTechnologies>
    </>
  );
}
