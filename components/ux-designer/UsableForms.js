import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function UsableForms(props) {
  const preTestQuestions = "/documents/Pre-Test Questions.pdf";
  const postTestQuestions = "/documents/Post-Test Questions.pdf";

  return (
    <>
      <ArtifactStory
        title="Usable Usability Test Forms"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>I created these fillable PDFs with two purposes in mind:</p>
        <p>1) Make it easy for the user.</p>
        <ul>
          <li>
            They could avoid context switching between the instructions and the
            response
          </li>
          <li>
            They <strong>couldn't mess up</strong> the instructions while
            responding
          </li>
          <li>
            They wouldn't be able to select more than one option where they
            shouldn't
          </li>
        </ul>
        <p>2) Make it easy for the team to collect users&rsquo; responses.</p>
        <ul>
          <li>
            Once you have a bunch of filled PDFs, Adobe lets you easily{" "}
            <strong>convert</strong> the filled forms into a{" "}
            <strong>spreadsheet</strong>. This made the analysis of the
            quantitative parts of the research much easier.
          </li>
          <li>
            The PDFs allowed the team to <strong>avoid</strong> copy-and-pasting
            the information from the forms to the spreadsheet which saved us
            time and <strong>potential errors</strong>.
          </li>
          <li>
            The PDFs made our efforts consistent and facilitated our
            collaboration when we were each interviewing separate individuals.
          </li>
        </ul>
        <p>
          Creating fillable PDFs was not something I had done before, but I
          adapted and quickly got in and figured out how to do it. This is a
          technique I&rsquo;d definitely consider in the future.
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="300px"
            src={preTestQuestions}
          />
          <figcaption>
            Demographic questions we administered before the usability test.{" "}
            <a href={preTestQuestions} target="_blank" class="fullscreen">
              Fullscreen
            </a>{" "}
          </figcaption>
        </figure>
        <br />
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="300px"
            src={postTestQuestions}
          />
          <figcaption>
            Questions we administered after the usability test, asking about
            their experience.{" "}
            <a href={postTestQuestions} target="_blank" class="fullscreen">
              Fullscreen
            </a>{" "}
          </figcaption>
        </figure>
        <h3>Presentation of Findings</h3>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSBtRMMXCa94kWsniFMA0nytRjtjE8fXQ4GP-u015KuXaxTeu8CsIQQcg8DMTzydYJzrEH_3Nz6tCO4/embed?start=true&loop=true&delayms=3000"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Form Creation</li>
        <li>Data Collection</li>
        <li>Interaction Design</li>
        <li>User Research</li>
        <li>Usability Testing</li>
        <h4>Technologies</h4>
        <li>Adobe Acrobat Pro</li>
        <li>Word</li>

      </SkillsNTechnologies>
    </>
  );
}
