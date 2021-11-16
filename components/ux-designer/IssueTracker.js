import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function IssueTracker(props) {
  const wireframes = "/documents/Preliminary Wireframes-1.pdf";
  const heuristicEvaluation = "/documents/Heuristic Evaluation.pdf";
  return (
    <>
      <ArtifactStory
        title="Issue Tracker: Wireframes & Heuristic Evaluation"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <h3>Wireframes</h3>
        <p>
          Sometimes “Uncle Larry’s Leather Goods” sends you brown belts—instead
          of the black ones you ordered (C’mon, Larry! This is the third time
          this quarter.). I <strong>designed</strong> this program to help
          Sundance Catalog Company <strong>resolve</strong> and{" "}
          <strong>track issues</strong>, like the ones Larry creates, from start
          to finish.{" "}
        </p>
        <p>
          The wireframes sketch out the visual layout and user interaction of
          this custom issue tracker program.
        </p>
        <p>
          The wireframes were a helpful prototype that I created to allow
          potential users and stakeholders of the issue tracker to{" "}
          <strong>get a feel</strong> for the basic idea behind the program; it
          was a tool for me in figuring out the layout and interaction of the
          application, but it was also a tool for them to help me discover and
          design for potential hidden needs.
        </p>
        <p>
          I <strong>reused patterns</strong> from other design systems to make
          the program feel familiar; one example of this is the circular
          floating action button from Google's Material Design.{" "}
        </p>
        <figure>
          <img src="/images/floating-action-button-tooltip.png" />
          <figcaption>
            A picture of the floating action button and descriptive tooltip in
            the finished application.
          </figcaption>
        </figure>

        <p>
          I tried to anticipate the user's needs by providing what I thought
          they would need right at a moment when they might need it; for
          example, when they moused over a button with just an icon, a
          descriptive tooltip would appear to help them if they were confused
          about what that button did.
        </p>

        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="300px"
            src={wireframes}
          />
          <figcaption>
            The wireframe document.{" "}
            <a href={wireframes} target="_blank" class="fullscreen">
              Fullscreen
            </a>
          </figcaption>
        </figure>

        <h3>Heuristic Evaluation</h3>

        <p>
          Ideally, we let a user test our designs, but the next best thing is a
          heuristic evaluation.{" "}
        </p>
        <p>
          With a list of commonly violated usability <strong>principles</strong>{" "}
          in hand, like “recognition rather than recall” and “match between
          system and real world,” I looked at my design with an “expert’s eye”.
        </p>
        <p>
          It was astounding how many of the principles I’d accidentally
          violated. However, once I recognized the missteps, the principle{" "}
          <strong>guided me</strong> to the <strong>solution</strong>.
        </p>
        <p>
          The solution to what might have been some ambiguous icon-only buttons was
          an informative, just-in-time tooltip. Resolving what might have become
          a confusion when the user made a search that returned no results, was
          as easy as adding an explanatory message to the otherwise empty
          results table.
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="300px"
            src={heuristicEvaluation}
          />
          <figcaption>
            The heuristic evaluation document, organized by page and severity.{" "}
            <a href={heuristicEvaluation} target="_blank" class="fullscreen">
              Fullscreen
            </a>
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Wireframing</li>
        <li>Prototyping</li>
        <li>Interaction Design</li>
        <li>UI Design</li>
        <li>Inspection</li>
        <li>Heuristic Evaluation</li>
        <li>Word Styles</li>

        <h4>Technologies</h4>

        <li>
          <a href="https://balsamiq.com/wireframes/">Balsamiq</a>
        </li>
        <li>Word</li>
      </SkillsNTechnologies>
    </>
  );
}
