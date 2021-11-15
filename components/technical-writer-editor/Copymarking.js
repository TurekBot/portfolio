import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function Copymarking(props) {
  const copymarkingPdf = "/documents/Copymarking Assignment.pdf";
  return (
    <>
      <ArtifactStory
        title="How to Tie a Square Knot: an Animated Infographic"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Back in the day, before technologies like Google Docs let you more
          fully collaborate on a digital literary piece, editors had a red pen;
          and they knew how to use it.
        </p>
        <p>
          In this assignment I applied my knowledge of literary conventions to
          improve an essay. I took a red pen and used special copymarking
          symbols to indicate various changes that needed to be made to the
          essay. Some changes were presentational in nature, like the way a
          paragraph was aligned. Another slew of changes was related to
          spelling, grammar, punctuation, and style; a few especially tricky
          errors of that variety were some letters needing a swap in
          &ldquo;senistive&rdquo;, a missing oxford comma, and &ldquo;its&rdquo;
          masquerading as &ldquo;it's&rdquo;.
        </p>
        <p>
          Learning this new-to-me approach involving the red marks of the editor
          prepared me to collaborate with other literary professionals.
        </p>
        <p>
          A key takeaway I got from this assignment and class was the role of an
          editor as a <em>teammate</em> instead of a critic. It's crucial that
          editors are able to convey to writers that they two are on the same
          team; otherwise, editors run the risk of their writers feeling
          slighted by their corrections.
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="300px"
            src={copymarkingPdf}
          />
          <figcaption>
            The article I copymarked. The circled letters mean things like "Body Text", "Flush Left", and "Ragged Right".{" "}
            <a href={copymarkingPdf} target="_blank" class="fullscreen">
              Fullscreen
            </a>{" "}
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Copymarking</li>
        <li>Copyediting</li>
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
