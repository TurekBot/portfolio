import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function AutoDash(props) {
  return (
    <>
      <ArtifactStory
        title="AutoDash"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Just type “ - ” (space, hyphen, space) and shazam: “ — ” an automatic{" "}
          <strong>em dash</strong>.
        </p>
        <img
          alt="A quick demo of how a hyphen turns into a dash as you type it."
          src="https://camo.githubusercontent.com/a258dfd137f7fe8ded93ed024b88e35a3739fce43dfe6ef2bb764b9571c26785/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f4a4d506379774c775134526833526c324d4c2f67697068792e676966"
        />
        <p>
          I'm a particular fan of the often spoken, but{" "}
          <strong>less often written</strong>, punctuation mark called{" "}
          <a href="https://www.thepunctuationguide.com/em-dash.html">
            the "em dash"
          </a>
          —so named because it's the width of the letter 'm'. We often
          emphatically <strong>interrupt</strong> ourselves or{" "}
          <strong>change thoughts</strong> when speaking; that's what the em
          dash is for.
        </p>
        <p>
          Without AutoDash, the most common way to type an em dash on Windows
          involves either
          <ul>
            <li>
              memorizing it’s “alt code” (<kbd>Alt</kbd> + <kbd>0</kbd>
              <kbd>1</kbd>
              <kbd>5</kbd>
              <kbd>1</kbd>) or
            </li>
            <li>
              just searching google for the character any time you need it.
            </li>
          </ul>
          I found both of those methods unnecessarily difficult or time
          consuming. AutoDash removes the pointless friction from the process.
        </p>
        <p>
          If you, like me, like your em dashes cozy (not surrounded by spaces),
          there's a{" "}
          <a href="https://github.com/TurekBot/AutoDash/releases/tag/v1.0.0">
            "--"
          </a>{" "}
          and{" "}
          <a href="https://github.com/TurekBot/AutoDash/releases/tag/v1.2.0">
            "---" version
          </a>
          , instead!
        </p>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Pattern Matching</li>
        <li>User Experience Design</li>

        <h4>Technologies</h4>
        <li>
          <a href="https://www.autohotkey.com/">AutoHotkey</a>
        </li>
        <li>
          <a href="https://youtu.be/2ReR1YJrNOM">Git</a>
        </li>
      </SkillsNTechnologies>
    </>
  );
}
