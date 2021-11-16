import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function PlasmaPosterReDo(props) {
  const originalPoster = "/documents/Plasma Poster—Original.pdf#view=FitH";
  const redesignedPoster = "/documents/Plasma Poster—Improved.pdf#view=FitH";

  return (
    <>
      <ArtifactStory
        title="Plasma Donation Center Poster Re-do"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Like{" "}
          <a href="/the-ux-designer/mr-poor-college-student">
            Mr. Poor College Student
          </a>
          , I too scraped by. To double my efficiency, I often found myself
          donating plasma while studying. Plasma donors are paid for their{" "}
          <em>time</em> because you can do little else while being confined to a
          chair. However, a chair is all I needed to study. I made sure to use
          my time wisely by reading my textbooks while I waited.
        </p>
        <p>
          During one of the many hours I spent in the Plasma Donation Center, I
          looked up from my chair and saw <strong>a poster</strong> from across
          the room.&nbsp; Once I got up close and looked it up and down a few
          times, I discovered what it was trying to convey: a promotion for
          bringing in new donors.
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="700px"
            src={originalPoster}
          />
          <figcaption>
            The original plasma donation promotion poster.{" "}
            <a href={originalPoster} target="_blank" class="fullscreen">
              Fullscreen
            </a>
          </figcaption>
        </figure>
        <p>
          To hone my skills, I took on the task of <strong>redesigning</strong>{" "}
          the poster to be simpler and easier to understand{" "}
          <strong>at a glance</strong>. The emblazoned &ldquo;Biotest Plasma
          Center&rdquo; and prominent dollar amounts caught the eye with{" "}
          <strong>contrast</strong> and repetition. Cleanly aligned and
          positioned text left the meaning unmistakable.
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="700px"
            src={redesignedPoster}
          />
          <figcaption>
            The redesigned plasma donation promotion poster.{" "}
            <a href={redesignedPoster} target="_blank" class="fullscreen">
              Fullscreen
            </a>
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>
          <a href="https://www.iainstitute.org/what-is-ia#:~:text=how%20to%20arrange%20the%20parts%20of%20something%20to%20be%20understandable.">
            Information Architecture
          </a>
        </li>
        <li>Concise Writing</li>
        <li>Visual Communication</li>

        <h4>Technologies</h4>
        <li>Microsoft Publisher</li>
      </SkillsNTechnologies>
    </>
  );
}
