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
          graphical platform before, I wanted to go above and beyond and
          replicate the movement of the pieces in real life: them dropping and
          bouncing into the board.
          <img id="connect-4" src="/images/connect-4.gif" />
        </p>
        <p>
          The technology that defined the user interface is a Desktop
          Application Platform called JavaFX. It allows the application to
          listen for actions that the user takes and respond appropriately; this
          general strategy is called event-driven programming and is a good
          choice for Graphical User Interfaces where the user could click
          anywhere at any time. For the text-based version of this game, a more
          procedural, step-by-step approach was taken because the user could
          only ever give one specific input at a time.{" "}
        </p>
        <p>
          One thing I learned while creating this program, was to avoid breaking
          the Law of Demeter—a guideline in programming to help you keep things
          from getting difficult to untangle; it says, “don't talk to strangers,
          only people (objects) you know.” My program worked, but I often broke
          the Law of Demeter by asking other objects to "let me talk to [their]
          friends."
        </p>
        <p>
          Wanna try the game yourself? Download my{" "}
          <a href="https://drive.google.com/file/d/1A5GKyzLXXFhX_xxgZjBZCHhn7am2hHMr/view?usp=sharing">
            Connect 4
          </a>{" "}
          game, here.
        </p>
        <p>
          If you'd rather just watch, here's a quick demo of the text-based and
          then the graphical version of the game.
        </p>
        <h4>Text-based Version</h4>

        <div className="embed-container">
          <iframe
            src="https://drive.google.com/file/d/1UzEhDAg-vQGu1xPZoPfcIZkwyJPXmevC/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <h4>Graphical Version</h4>

        <div className="embed-container">
          <iframe
            src="https://drive.google.com/file/d/1u7JwOV2L7p4HMb2SYuxY6GwSpbQaOtDu/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>UX Design</li>
        <li>Interaction Design</li>
        <li>Desktop Application Programming</li>
        <li>Unit Testing</li>

        <h4>Technologies</h4>
        <li>JavaFX</li>
        <li>FXML</li>
        <li>Gradle</li>
        <li>Git</li>
        <li>IntelliJ IDEA</li>
      </SkillsNTechnologies>
    </>
  );
}
