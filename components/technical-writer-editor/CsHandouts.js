import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function CsHandouts(props) {
  const squareKnotSite = "http://squareknot.surge.sh/";

  return (
    <>
      <ArtifactStory
        title="CS Handouts: A Glow-Up"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          I decided to make the &ldquo;related area&rdquo; of my
          degree&mdash;the part where I chose classes that were outside of the
          Technical Communication program, but related to what I wanted to do in
          the future&mdash;be <strong>Software Engineering</strong>. I studied
          Computer Science before transferring to ASU, and my original intention
          in studying User Experience Design was to be able to create
          easy-to-use software&mdash;software that you don't need a degree to
          use.
        </p>
        <p>
          SER 216 was my first Software Engineering class at ASU. When I got the
          first assignment, I noticed a few mistakes here and there, a certain
          lack of structure, and that it was a `.doc` file&mdash;not a `.docx`
          file. Not a huge deal. But by the second assignment, I could tell that
          the 1990's vibes, broken sentences and lack of structure was going to
          be the norm. I decided to try out my newly found comprehensive editing
          skills to give these handouts a glow-up.
        </p>
        <p>
          Looking ahead in the class, I could see that we would have 7 of these
          &ldquo;deliverable&rdquo; assignments. I knew that I wanted all of the
          handouts to get a visual makeover, so I saved the handout in the new
          `.docx` format and begun applying Word's most magnificent feature:{" "}
          <strong>styles</strong>.
        </p>
        <figure>
          <video
            controls
            loop
            autoPlay
            muted
            src="/images/comparing-psp.mp4"
            width="100%"
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can <a href="/images/comparing-psp.mp4">download it</a>
            and watch it with your favorite video player!
          </video>
          <figcaption>
            A comparison of the original and improved documents.
          </figcaption>
        </figure>
        <p>
          Applying styles to sections of the document was a flexible strategy
          that would allow me to change the formatting of all instances of a
          style with a single click. Styles were crucial to allowing me to
          manage the <strong>maintenance and consistency</strong> issues
          otherwise inherent in a document with sections that share a common
          format&mdash;especially when that format can (and did) change over
          time.
        </p>
        <p>
          I also created custom &ldquo;code&rdquo; and &ldquo;code block&rdquo;
          styles that would allow readers to distinguish code snippets, folder
          names and file names, from the rest of a paragraph. Formatting inline
          code differently than other words is a common convention in the
          software and technical communication industry&mdash;and one that is
          not often enough applied.
        </p>
        <p>
          To give the handouts a professional appearance, I took a look at{" "}
          <a href="https://brandguide.asu.edu/">ASU's brand guide</a> and
          applied the ASU colors and fonts listed there.
        </p>
        <p>
          It was a convenient fact that I was both the user and editor of the
          document. As I followed along with each handout, I went leaving
          comments for myself as to how to make it better. Later, I went through
          the comments and changed the document to better serve a student.
        </p>
        <p>
          One concrete example of that is how I <strong>clarified</strong> some ambiguous table
          headers: In a bug-tracking table did &ldquo;Fix Time&rdquo; refer to
          what time the student fixed the bug or how long it took the student to
          fix it? (The answer is how <em>long</em>, so I added
          &ldquo;(duration)&rdquo; in small print below the header.) A second
          ambiguity: What does &ldquo;Sl. No.&rdquo; refer to? Turns out:
          &ldquo;Serial Number&rdquo; This one was extra confusing because the
          lowercase 'l' looks just like the capital &ldquo;I&rdquo;. I spelled
          that heading out instead.
        </p>
        <p>
          I further improved the <strong>scannability</strong> and organization of this long
          handout by bolding important points and adding section headings where
          there were none. I also reorganized some of the sections to coincide
          with how they would be carried out. For instance, I put a free-design
          section, where you were to sketch out your code's design, at the end
          of the handout (to allow a full page and avoid any layout changes by
          using the section), but right where you needed to know about the form,
          I included a link that would take you right to it.
        </p>
        <p>
          At the end of the semester, as a thank you to the professor who let me
          jump into her Software Engineering course as a Technical
          Communications student, I packaged up the improved handouts and theme
          and sent them to the <strong>professor</strong>. She was very grateful, and later told
          me that she liked them so much that she used them as a template for
          another class too.
        </p>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Comprehensive Editing</li>
        <li>Copy Editing</li>
        <li>UX Design</li>
        <li>Typography</li>
        <li><a href="https://www.iainstitute.org/what-is-ia#:~:text=how%20to%20arrange%20the%20parts%20of%20something%20to%20be%20understandable.">Information Architecture</a></li>
        <li>Style Guide Adherence</li>
        

        <h4>Technologies</h4>
        <li>Word</li>
        <li>Styles</li>
      </SkillsNTechnologies>
    </>
  );
}
