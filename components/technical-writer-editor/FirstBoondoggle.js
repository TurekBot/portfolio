import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function FirstBoondoggle(props) {
  const copymarkingPdf = "/documents/Copymarking Assignment.pdf";
  return (
    <>
      <ArtifactStory
        title="Making Your First Boondoggle"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
        As a 12-year-old, I found BoondoggleMan.com and learned to boondoggle. Many boondoggles later, at 26, I paid it forward with a brief yet indispensable video for boondoggling virgins. With just my iPhone and a ledge—and having watched a lot of BuzzFeed top-down perpectived videos—the video just came into being. I chopped it up, leaving only the most important parts, recorded some narration, threw in some smooth jazz and there it was. I was tickled to discover that when you’re having fun, creating good content wasn’t as hard as I thought.  
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
        

        <h4>Technologies</h4>
        <li>iPhone</li>
        <li>Windows Movie Maker</li>

      </SkillsNTechnologies>
    </>
  );
}
