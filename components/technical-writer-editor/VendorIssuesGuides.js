import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function VendorIssuesGuides(props) {
  const squareKnotSite = "http://squareknot.surge.sh/";
  return (
    <>
      <ArtifactStory
        title="Issue Tracker User Guide"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Elsewhere in this portfolio, I describe the{" "}
          <a href="/the-ux-designer/issue-tracker">Issue Tracker I created</a>{" "}
          for Sundance Catalog. It helps them deal with discrepancies between
          what they ordered from vendors and what they <em>got</em> from
          vendors.
        </p>
        <p>
          After going on to create the software itself, I also wrote a user
          guide so that the <b>employees</b> could <b>learn</b> how to use it and have it as a{" "}
          <b>reference</b> if they got stuck.
        </p>
        <figure>
          <iframe
            width="100%"
            height="500px"
            src="http://vendor-issues.surge.sh/"
          />
          <figcaption>
            The vendor issues user guide that I wrote. Live at{" "}
            <a href="http://vendor-issues.surge.sh">
              http://vendor-issues.surge.sh
            </a>
          </figcaption>
        </figure>
        <p>
          The documentation platform I found is <b>specific to software</b> guides and
          has worked out really well. It's an open source project from Facebook
          called <a href="https://docusaurus.io/">Docusaurus</a>. You write the
          documentation in{" "}
          <a href="https://dev.to/developer_anand/learn-basic-markdown-33nl">
            Markdown
          </a>
          , including images as you like, and the framework provides an easy to
          use structure to the guide. Search and localization are common needs
          and so those are just a few clicks away to get started.
        </p>
        <p>
          I wrote out the steps for a lot of the actions users might take in the
          Issue Tracker. However, some actions are better conveyed by
          demonstration. For such processes, I recorded an <b>animated gif</b>, like
          this one:
        </p>
        <figure>
          <img src="http://vendor-issues.surge.sh/docs/assets/mention-someone.gif" />
          <figcaption>
            A recording of how to mention someone in a comment in the Vendor Issues app.
          </figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Simple Instructions</li>
        <li>Visual Communication</li>
        <li>Web Design</li>

        <h4>Technologies</h4>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Animated GIFs</li>
        <li>
          <a href="https://dev.to/developer_anand/learn-basic-markdown-33nl">
            Markdown
          </a>
        </li>
        <li>
          <a href="https://docusaurus.io/">Docusaurus</a>
        </li>
      </SkillsNTechnologies>
    </>
  );
}
