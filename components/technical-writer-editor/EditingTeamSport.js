import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function EditingTeamSport(props) {
  const copymarkingPdf = "/documents/Copymarking Assignment.pdf";
  return (
    <>
      <ArtifactStory
        title="Editing: a Team Sport"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Back in the day, before technologies like Google Docs let you more
          fully collaborate on a digital literary piece, editors printed,
          marked, and exchanged papers with writers.
        </p>
        <p>
          In this assignment I applied my knowledge of{" "}
          <strong>literary conventions</strong> to improve an essay. I took a
          red pen and used special{" "}
          <a href="https://www.wordy.com/writers-workshop/proofreading-marks-symbols/">
            <strong>proofreading symbols</strong>
          </a>{" "}
          to indicate various changes that needed to be made to the essay. Some
          changes were presentational in nature, like the way a paragraph was
          aligned. Other changes was related to spelling, grammar, punctuation,
          and style. A few especially tricky errors of that variety were some
          letters needing a swap in &ldquo;senistive&rdquo;, a missing oxford
          comma, and &ldquo;its&rdquo; masquerading as &ldquo;it's&rdquo;.
        </p>
        <p>
          Learning this new-to-me approach involving the red marks of the editor
          prepared me to <strong>collaborate</strong> with other literary
          professionals.
        </p>
        <p>
          A key takeaway I got from this assignment and class was the role of an
          editor as a{" "}
          <strong>
            <em>teammate</em>
          </strong>{" "}
          instead of a <strong>critic</strong>. It's crucial that editors are
          able to convey to writers that they two are on the{" "}
          <strong>same team</strong>; otherwise, editors run the risk of their
          writers feeling slighted by their corrections.
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="300px"
            src={copymarkingPdf}
          />
          <figcaption>
            The article I marked up. The circled letters in the margin mean
            things like "Body Text", "Flush Left", and "Ragged Right".{" "}
            <a href={copymarkingPdf} target="_blank" class="fullscreen">
              Fullscreen
            </a>{" "}
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Editorial Markup</li>
        <li>Copy Editing</li>
        <li>Conventions</li>
        <li>Grammar</li>
        <li>Punctuation</li>
        <li>Spelling</li>
        <li>Collaboration</li>

        <h4>Technologies</h4>
        <li>A red pen</li>
      </SkillsNTechnologies>
    </>
  );
}
