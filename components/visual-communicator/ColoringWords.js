import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function ColoringWords(props) {
  return (
    <>
      <ArtifactStory
        title="Coloring Words"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <img
          id="harmony"
          alt="The saying, &qout;Harmony is being different together&qout; In yellow, black, pink, and turquoise. To it's lower right is a picture of two sine waves, one turquoise, one pink. Though they are different, they interset harmoniusly, resulting in a yellow music symbol."
          src="/images/harmony.png"
        />
        <p>
          The intent of this piece was to use the principles of graphic design
          to <strong>bring feeling</strong> to the words. In response to that
          need, I kept things simple, yet colorful and profound.
        </p>

        <p>
          I drew on the common struggle humans have of getting along; I turned
          the struggle on its head by <strong>reframing differences</strong> as{" "}
          the thing that <strong>"makes the music".</strong>{" "}
        </p>
        <p>
          In most of my studies, I've used more words than images, but in this
          piece, I successfully composed simple colors, words, fonts, and lines
          into something more than the sum of their parts.
        </p>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Typography</li>
        <li>Composition</li>
        <li>Color</li>
        
        <h4>Technologies</h4>
        <li>Adobe Illustrator</li>
        <li>SVG</li>
      </SkillsNTechnologies>
    </>
  );
}
