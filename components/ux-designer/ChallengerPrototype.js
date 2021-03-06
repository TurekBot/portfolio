import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function ChallengerPrototype(props) {
  const prototypeDocument = "/documents/Challeng.er Prototype with hints.pdf";
  const prototypeDocumentWithoutHints =
    "/documents/Challeng.er Prototype no hints.pdf";

  return (
    <>
      <ArtifactStory
        title="Challeng.er Click-through Prototype"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          The Challeng.er App allows friends to join athletic challenges
          sponsored by companies who offer prizes for those who complete the
          challenge. Users can join with a group or go solo.
        </p>
        <p>
          Having the prototype for{" "}
          <a href="/the-software-developer/challeng.er">the Challeng.er App</a>{" "}
          be interactive was crucial to convey how the actual app would work
          before it was ever built. The audience for this artifact was not an
          end user, but a project manager. Their <b>time is scarce</b>
          . This artifact kept that in mind and addressed it by distilling the
          essence of the interactions into something they could{" "}
          <b>feel and use</b>, not just read about.{" "}
        </p>
        <p>
          The prototype came in the form of a PDF, so there was no overhead to
          install or use it. The interactions are simulated with linked areas
          (shown here in light red for clarity) that simply transport the viewer
          to another page of the prototype. Go ahead,{" "}
          <b>give it a try</b>!
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="700px"
            src={prototypeDocument}
          />
          <figcaption>
            The click-through prototype. Red click hints were added to make it
            clear what you can click.{" "}
            <a href={prototypeDocument} target="_blank" class="fullscreen">
              Fullscreen
            </a>{" "}
            <br />
            <br />
            Also, here's{" "}
            <a href={prototypeDocumentWithoutHints} target="_blank">
              a version without
            </a>{" "}
            the red click hints.
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Prototyping</li>
        <li>Interaction Design</li>
        <li>User Testing</li>
        <li>UI Design</li>

        <h4>Technologies</h4>
        <li><a href="https://balsamiq.com/wireframes/">Balsamiq</a></li>
      </SkillsNTechnologies>
    </>
  );
}
