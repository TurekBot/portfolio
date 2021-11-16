import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function CaseOfTheClipboard(props) {
  return (
    <>
      <ArtifactStory
        title="The Case of the Clipboard"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          When you stumble upon a bug, you think you&rsquo;re going
          crazy&mdash;and you usually are.
        </p>
        <p>
          Most of the time, that supposed <em>bug</em> is just your own human
          error: a problem that exists between the keyboard and the chair: you.
        </p>
        <p>
          But occasionally, you stumble across a{" "}
          <strong>real-life error</strong> in a system: other people can
          reproduce it on their computer, too. So it was with the case of the
          clipboard.
        </p>
        <p>
          I was creating{" "}
          <a href="/the-ux-designer/issue-tracker">
            an issue tracker for Sundance Catalog
          </a>{" "}
          and I was just trying to allow the user to paste an image when I
          discovered that <strong>images</strong> coming from the clipboard got
          really <strong>messed up</strong>: their colors came out irreparably
          different shades than they went in. On a black background all was
          fine, but not so with any other color.
        </p>
        <figure>
          <img src="/images/clipboard-demo.gif" />
          <figcaption>
            A demonstration of how the image colors mistakenly change based on
            the background color.
          </figcaption>
        </figure>
        <p>
          Perhaps for my own sanity and satisfaction, I spent a long time{" "}
          <strong>tracking down clues</strong> and investigating exactly under
          what circumstances this bug happened. I made a demo other people could{" "}
          <strong>try themselves</strong>. I recorded an animated gif, concisely
          exposing the bug&rsquo;s behavior. Then I edited all my research down
          into{" "}
          <a href="https://stackoverflow.com/q/54995198/5432315">
            an easy-to-digest question
          </a>{" "}
          on the popular developer Q&amp;A site StackOverflow.
        </p>
        <p>
          It was to my great satisfaction that many others found the same thing
          I had. It <em>was</em> a bug. Many of them lent me their upvotes; one
          user left <strong>his</strong> with <strong>praise</strong> saying,
          <blockquote>
            &ldquo;Upvoted for excellent research, good formatting, and possibly
            spotting out a bug. I wish more questions were written to this
            standard.&rdquo;
          </blockquote>
        </p>
        <p>
          I was delighted. Having my efforts to sniff out and pin down this bug
          validated brought me a great deal of satisfaction.
        </p>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>
          <a href="https://www.iainstitute.org/what-is-ia#:~:text=how%20to%20arrange%20the%20parts%20of%20something%20to%20be%20understandable.">
            Information Architecture
          </a>
        </li>
        <li>Debugging</li>
        <li>Concise Writing</li>
        <li>Visual Communication</li>

        <li>Composing{" "}
          <a href="https://stackoverflow.com/help/minimal-reproducible-example">
            Minimal, Reproducible Examples
          </a>
        </li>

        <h4>Technologies</h4>
        <li>Animated GIFs</li>
        <li>
          <a href="https://dev.to/developer_anand/learn-basic-markdown-33nl">
            Markdown
          </a>
        </li>
        <li>
          <a href="https://openjfx.io/">JavaFX</a>
        </li>
      </SkillsNTechnologies>
    </>
  );
}
