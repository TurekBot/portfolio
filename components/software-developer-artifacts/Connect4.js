import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function Connect4(props) {
  return (
    <>
      <ArtifactStory
        title="Connect 4 Game"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Plink, plink-plink. It’s Connect 4. Now appearing digitally—in both
          text-based and graphical flavors.
        </p>
        <p>
          It would have been enough to just have the game pieces appear
          instantaneously in place, but, having had experience with the
          application platform before, I wanted to go above and beyond and
          replicate the movement of the pieces in real life: them dropping and
          bouncing into the board.
          <img id="connect-4" src="/images/connect-4.gif" />
        </p>
        <p>
          The technology that defined the user interface is a Desktop
          Application Platform called <a href="https://openjfx.io/">JavaFX</a>. It allows the application to
          listen for actions that the user takes and respond appropriately; this
          general strategy is called <strong>event-driven programming</strong>{" "}
          and is a good choice for Graphical User Interfaces where the user
          could click anywhere at any time.
        </p>
        <p>
          One thing <strong>I learned</strong> while creating this program, was
          to avoid breaking the Law of Demeter—a guideline in programming to
          help you keep things from getting difficult to untangle; it says,
          “don't talk to strangers, only people (objects) you know.” My program
          worked, but I often broke the <strong>Law of Demeter</strong> by
          asking other objects to "let me talk to [their] friends."
        </p>
        <p>
          Wanna try the game yourself? Download my{" "}
          <a href="https://drive.google.com/file/d/1A5GKyzLXXFhX_xxgZjBZCHhn7am2hHMr/view?usp=sharing">
            Connect 4
          </a>{" "}
          game, here.
        </p>
        <p>
          If you'd rather just watch, here's a <strong>quick demo</strong> of
          the text-based and then the graphical version of the game.
        </p>
        <h4>Text-based Version</h4>

        <figure>
          <video
            controls
            muted
            src="/images/Connect 4 Console Demo.mp4"
            width="100%"
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can{" "}
            <a href="/images/Connect 4 Console Demo.mp4">download it</a>
            and watch it with your favorite video player!
          </video>
          <figcaption>
            A demo of the purely text-based version of the game.
          </figcaption>
        </figure>

        <h4>Graphical Version</h4>

        <figure>
          <video
            controls
            muted
            src="/images/Connect 4 Graphical Demo.mp4"
            width="100%"
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can{" "}
            <a href="/images/Connect 4 Graphical Demo.mp4">download it</a>
            and watch it with your favorite video player!
          </video>
          <figcaption>A demo of the graphical version of the game.</figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>UX Design</li>
        <li>Interaction Design</li>
        <li>Desktop Application Programming</li>
        <li>Unit Testing</li>

        <h4>Technologies</h4>
        <li><a href="https://openjfx.io/">JavaFX</a></li>
        <li>
          <a href="https://en.wikipedia.org/wiki/FXML">FXML</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Gradle#:~:text=Gradle%20is%20a%20build%20automation%20tool&text=compilation%20and%20packaging%20to%20testing%2C%20deployment%2C%20and%20publishing">
            Gradle
          </a>
        </li>
        <li><a href="https://youtu.be/2ReR1YJrNOM">Git</a></li>
        <li><a href="https://en.wikipedia.org/wiki/IntelliJ_IDEA">IntelliJ IDEA</a></li>
      </SkillsNTechnologies>
    </>
  );
}
