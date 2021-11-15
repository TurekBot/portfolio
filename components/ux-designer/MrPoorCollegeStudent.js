import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function MrPoorCollegeStudent(props) {
  const personaDocument = "/documents/Mr Poor College Student Persona.pdf";
  
  return (
    <>
      <ArtifactStory
        title="Food Assistance Persona: Mr. Poor College Student"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Personas shine when they’re just true enough—I know this one is true
          enough because I put a part of my poor college self in it.{" "}
        </p>
        <p>
          Cereal isn’t that bad with water instead of milk. I know, because the
          quote, “I don’t want anyone to know, but sometimes, when I’m out of
          milk, I put water in my cereal,” is based on my own life experience as
          a poor college student.{" "}
        </p>
        <p>
          Without knowing it’s origin, my teammate commented to me that the
          quote was the best part of the persona; that it felt{" "}
          <strong>“so real”</strong>. I guess that’s what you call validation.
        </p>

        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="550px"
            src={personaDocument}
          />
          <figcaption>
            The persona was created for a college food assistance program.{" "}
            <a href={personaDocument} target="_blank" class="fullscreen">
              Fullscreen
            </a>
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <li>Persona Development</li>
        <li>Concise Writing</li>
        <li>Visual Design</li>
      </SkillsNTechnologies>
    </>
  );
}
