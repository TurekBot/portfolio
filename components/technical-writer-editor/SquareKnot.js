import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function SquareKnot(props) {

    const squareKnotSite = "http://squareknot.surge.sh/"
  return (
    <>
      <ArtifactStory
        title="How to Tie a Square Knot: an Animated Infographic"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Everyone knows the square knot. Not everyone <em>knows</em> (how to
          tie) the square knot. It was my aim to change that.
        </p>
        <p>
          Tying a knot is a <b>series of movements</b>, not a series of positions. With
          that in mind, this infographic both animates each step, as well as the
          whole process of tying the knot. Contrasting strand colors provide
          readers a much-needed affordance.
        </p>
        <figure>
          <iframe
            className="document-preview"
            width="100%"
            height="500px"
            src={squareKnotSite}
          />
          <figcaption>
            The animated infographic. Hold your mouse over a step to watch it.{" "}
            <a href={squareKnotSite} target="_blank" class="fullscreen">
              Fullscreen
            </a>
          </figcaption>
        </figure>
        <p>
          Having been born of printed media, digital media often falls short of
          its demonstrative potential, but not here. The mouse-drawn, animated
          gifs <b>automatically play</b> when the user mouses over them. Red and blue
          strands offer simple distinction between the otherwise interwoven
          cords.
        </p>
        <p>
          Getting the animations to autoplay on mouse-over required some
          JavaScript. Making the whole page look hand-drawn required some clever
          CSS. Discovering the applications of those technologies took some
          research skills: scanning and searching through various technical
          reference pages.
        </p>
        <p>
          My go-to solution for <b>schoolwork</b> is to make it <b>interesting</b> and
          fun&mdash;usually by making it <em>mine</em>; by playing around or
          making it about something <em>I&rsquo;m</em> interested in. When
          I&rsquo;m able to keep this play time-bound, it almost always works
          out to my advantage: I learn&mdash;and remember&mdash;something new
          and I have{" "}
          <a href="http://squareknot.surge.sh/">something to show for it</a>.
        </p>

      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Simple Instructions</li>
        <li>Visual Communication</li>
        <li>Web Design</li>
        <li><a href="https://english.stackexchange.com/a/19973/333583">Google-Fu</a></li>

        <h4>Technologies</h4>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Animated GIFs</li>
        <li>Animation Software (FlipAnim.com)</li>
      </SkillsNTechnologies>
    </>
  );
}
