import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

function reloadFrame() {
  document.getElementById("jaw-codepen").src =
    document.getElementById("jaw-codepen").src;
}

export default function JawDrop(props) {
  return (
    <>
      <ArtifactStory
        title="My jaw didn't drop: it shattered"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          I wrote and rewrote{" "}
          <a target="_blank" href="https://codepen.io/TurekBot/full/ZEEVyde">
            this piece
          </a>{" "}
          to do just that: command attention. You only get so much space above
          the fold and to win people’s attention you need to work for it. This
          piece’s intent was to practice writing <strong>a good hook</strong>.
          The goal was to get someone’s attention and then start them on a
          journey they continue of their own accord.
        </p>
        <p>
          I intentionally made the animation play only once. If you missed it,
          click here to <button onClick={reloadFrame}>start it again</button>.{" "}
        </p>
        <iframe
          id="jaw-codepen"
          width="100%"
          height="700px"
          src="https://codepen.io/TurekBot/full/ZEEVyde"
        />
      </ArtifactStory>
      <SkillsNTechnologies>
        <li>Headline Writing</li>
        <li>"Fold" Awareness</li>
        <li>Typography</li>
        <li>HTML</li>
        <li>CSS</li>
      </SkillsNTechnologies>
    </>
  );
}
