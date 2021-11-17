import ArtifactCardListing from "../ArtifactCardListing";
import ArtifactCardUse from "../ArtifactCardUse";
import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function ThisWebsite(props) {
  return (
    <>
      <ArtifactStory
        title="This Website"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Though I knew using a template for my portfolio would be much easier,
          I just couldn't help myself—this time. (In non-learning experiences,
          it's often better to reuse someone else's solution than to roll your
          own. I've learned this first hand on other projects.)
        </p>
        <p>
          Having recently taken a class on semantic web design, I wanted to <b>give</b>{" "}
          my new-found skills a <b>try</b> on a full-blown website. After all, what
          better way to demonstrate my abilities than to <em>show</em> not tell.
        </p>
        <p>
          This portfolio has been an <b>immense</b> amount of work, but it's been
          oh-so-satisfying to compile all of the <b>hard work</b> I've put into my
          degree over the last few years.
        </p>
        <p>
          Yet, there are still flaws. Despite the 100s of hours I've put into
          compiling and creating this website, there are still mistakes—perhaps
          even in the very things I've said I'm good at.{" "}
        </p>

        <p>
          As it turns out, doing something well is <em>really hard</em>.
        </p>
        <p>
          But, I'm glad I did it. <b>I learned</b> a lot. And that's all that matters:
          that you do better next time.
        </p>
        <h3>Strategies</h3>
        <p>
          These are the strategies I employed to keep myself out of trouble.
        </p>
        <h4>Reuse</h4>
        <p>
          Wherever I could, I created reusable components and styles. This was
          crucial because of the ever-changing nature of software. Having a
          single source of truth for every component allowed me to make a <b>change</b>{" "}
          in one place and have it <b>propagate</b> throughout the website.
        </p>
        <p>
          One prime example of this kind of reuse was the{" "}
          <code>&lt;ArtifactCard/&gt;</code> component I created. It defined the
          basic structure of every card demonstrating a piece of work.
        </p>
          <ArtifactCardUse/>

        <p>
          Late into development, I realized that it would be better to have a
          "See more..." button instead of just wrapping the whole card in a
          link. Because I was reusing <code>&lt;ArtifactCard/&gt;</code> for
          each one, I only had to make a single change and each card got a
          button.
        </p>
        <ArtifactCardListing />
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Visual Communication</li>
        <li>
          <a href="https://www.iainstitute.org/what-is-ia#:~:text=how%20to%20arrange%20the%20parts%20of%20something%20to%20be%20understandable.">
            Information Architecture
          </a>
        </li>
        <li>Concise Writing</li>
        <li>Typography</li>
        <li>Color</li>
        <li>UX Design</li>

        <h4>Technologies</h4>
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://nextjs.org/">Next.js</a>
        </li>
        <li>
          <a href="https://www.g2.com/products/vercel/reviews#:~:text=%E2%80%8BVercel%20is%20a%20cloud,supervision%2C%20all%20with%20no%20configuration.">
            Vercel
          </a>
        </li>
        <li>
          <a href="https://youtu.be/2ReR1YJrNOM">Git</a>
        </li>
        <li>
          <a href="https://www.conventionalcommits.org/">
            Conventional Commits
          </a>
        </li>
        <li>
          <a href="https://code.visualstudio.com/">VS Code</a>
        </li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Animated GIFs</li>
      </SkillsNTechnologies>
    </>
  );
}
