import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function Knuckles(props) {
  const memoranda = "http://memoranda.sourceforge.net/overview.html";

  return (
    <>
      <ArtifactStory
        title="Agile Team: Knuckle's Dojo Scheduler"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Though my degree is in UX and Technical Communication, my few years of{" "}
          <b>experience</b> in the <b>software industry</b>{" "}
          convinced a few professors to allow me to jump in to their upper-level
          software engineering classes.
        </p>

        <p>
          Everyone split into agile teams. The task was to turn an old crusty
          piece of software, named <a href={memoranda}>Memoranda</a>, into
          something useful. Our customer needed us to turn it into a{" "}
          <b>class scheduling software</b> for the local martial arts
          dojo.
        </p>
        <figure id="memoranda">
          <img src="/images/memoranda.gif" />
          <figcaption>Memoranda in all it's early-2000s glory.</figcaption>
        </figure>
        <p>
          We learned how to use Git and GitHub to collaborate as a team. After
          meeting with our customer and understanding what they wanted, our team
          met and broke the features down into managable sections that would
          serve a specific user (called user stories). We established{" "}
          <b>quality standards</b> regarding unit tests, code style,
          and bad code tolerances.
        </p>
        <p>
          Over the next few weeks, we worked tirelessly. Each user story made
          its way from "To Do" to "In Progress" to "In Review" to "Finished".
          Every two weeks, we presented our progress to the customer and
          listened carefully to their feedback.
        </p>
        <p>
          The <b>contribution I'm proudest of</b> was the class
          scheduling section. I leveraged my experience with JavaFX (the desktop
          application platform) to bring and adapt a fully-fledged calendaring
          system to the app. My mentors, Leonardo and Michelangelo, would be
          proud, I'm sure.
        </p>
        <figure>
          <video
            controls
            loop
            autoPlay
            muted
            src="/images/dojo-demo.mp4"
            width="100%"
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can <a href="/images/dojo-demo.mp4">download it</a>
            and watch it with your favorite video player!
          </video>
          <figcaption>
            A demo of the improved app; I was chiefly responsible for this
            scheduling section.
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Agile</li>
        <li>Scrum</li>
        <li>Asynchronous Collaboration</li>
        <li>Legacy Code</li>
        <li>Continuous Integration</li>
        <li>Unit Testing</li>
        <li>Code Reviews</li>
        <li>Static Analysis</li>
        <li>Interaction Design</li>

        <h4>Technologies</h4>
        <li>
          <a href="https://digital.gov/resources/an-introduction-github/">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://youtu.be/2ReR1YJrNOM">Git</a>
        </li>
        <li>
          <a href="https://openjfx.io/">JavaFX</a> (New UI Framework)
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Swing_(Java)">Java Swing</a>{" "}
          (Old UI Framework)
        </li>

        <li><a href="https://en.wikipedia.org/wiki/Travis_CI">Travis CI</a></li>

        <li>
          <a href="https://en.wikipedia.org/wiki/Gradle#:~:text=Gradle%20is%20a%20build%20automation%20tool&text=compilation%20and%20packaging%20to%20testing%2C%20deployment%2C%20and%20publishing">
            Gradle
          </a>
        </li>
      </SkillsNTechnologies>
    </>
  );
}
