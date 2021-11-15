import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function Challenger(props) {
  const umlDiagrams = "/documents/UML Diagrams.pdf";

  return (
    <>
      <ArtifactStory
        title="Challeng.er"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          This app allows friends to join athletic challenges sponsored by
          companies who offer prizes for those who complete the challenge. Users
          can join with a group or go solo.
        </p>
        <p>
          Though we never did write the code for this app in this software
          engineering class, we did everything but that: we{" "}
          <strong>designed</strong> the structure, behavior, and interaction of{" "}
          <strong>every component</strong>—but we did it using diagrams.
        </p>
        <p>
          Unified Modeling Language (UML) was a good fit for visually fleshing
          out the design of this program: it’s widely used and has a diagram
          type and abstraction level appropriate for every part of the design
          process.
        </p>
        <p>
          The adjacent document is my team’s final project; it compiles our many
          diagrams starting with the concepts and people at play and ending with
          fully fleshed out implementation-ready object diagrams.
        </p>
        <p>
          (I <em>also</em> designed a{" "}
          <a href="/the-ux-designer/challeng.er-prototype">
            click-through prototype
          </a>{" "}
          of our app.)
        </p>
        <h3>All Diagrams</h3>

        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="550px"
            src={umlDiagrams}
          />
          <figcaption>
            A compilation of all the UML diagrams we created and refined while
            designing this application.{" "}
            <a href={umlDiagrams} target="_blank" class="fullscreen">
              Fullscreen
            </a>
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>

        <li>
          UML
          <ul>
            <li>Class Diagrams</li>
            <li>Object Diagrams</li>
            <li>Activity Diagrams</li>
            <li>Use-case Diagrams</li>
            <li>State Diagrams</li>
            <li>Sequence Diagrams</li>
            <li>Communication Diagrams</li>
          </ul>
          <li>Operational Patterns</li>
          <li>Zed Notation</li>
          <li>Domain Modeling</li>
          <li>Implementation Modeling</li>
          <h4>Technologies</h4>
        </li>
        <li>
          <a href="https://astah.net/">Astah™</a>
        </li>
        <li>LaTeX</li>
        <li>Word</li>
      </SkillsNTechnologies>
    </>
  );
}
