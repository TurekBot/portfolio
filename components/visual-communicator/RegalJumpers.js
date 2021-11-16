import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function RegalJumpers(props) {
  const bea =
    "https://www.tiktok.com/@mini_robomuppets/video/6981824206040321286?is_from_webapp=1&sender_device=pc&web_id7005365690221086214";

  return (
    <>
      <ArtifactStory
        title="Regal Jumpers"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          Jumping spiders are like dogs. They can bite you, but they generally
          don’t.
        </p>
        <p>
          After learning about and adopting one of these little finger kittens
          myself, I made a poster intended to be put up in a{" "}
          <strong>pet store</strong> selling jumping spiders. So many of us have an
          irrational fear of spiders, yet something about these little jumping
          spiders seems to win people over. Just ask the 888.8K followers of Bea the Jumping Spider;{" "}
          <a href={bea}>she’s Tik-Tok famous</a> and has cured many people’s
          arachnophobia. That’s the kind of magic I hoped to capture in this
          poster.
        </p>
        <p>
          As you can see, my <strong>first draft</strong> wasn’t very good. As
          my instructor put it, <blockquote>
            “You might have to put your nose on the poster
            just to read the print.”
          </blockquote> I was trying to draw the audience in and make
          them curious... They were probably just confused. I had missed the
          mark.
        </p>
        <figure>
          <a target="_blank" href="/documents/Regal Jumpers First Draft.pdf">
            <img
              alt='A large orange "Psst..." at top. In the bottom right corner, there&apos;s a pink square with white text in it, but the text much too small.'
              id="regal-jumpers-first-draft"
              className="zoom-worthy-image"
              src="/images/regal-jumpers-first-draft.png"
            />
          </a>
          <figcaption>The first draft.</figcaption>
        </figure>
        <p>
          However, I was determined, and despite my unfamiliarity with visual
          design and the principles and tools that go along with it, I{" "}
          <strong>tried again</strong>. With each draft, it looked better and
          with a lot of practice I found it getting easier and easier.
        </p>
        <p>
          I’m proud to present the final poster: I traced both spiders by hand
          with a mouse in Illustrator. I created balance and depth with the
          squares and colors. I worked hard to make the poster{" "}
          <strong>brief yet striking.</strong>
        </p>

        <figure>
          <a
            target="_blank"
            href="/documents/Regal Jumpers Pet Store Poster.pdf"
          >
            <img
              id="regal-jumpers"
              alt='A poster with a large orange, &qout;Psst..." at the top of it and then three large squares along the bottom. The first square is pink and has a line art, curious-looking jumping spider just barely protruding out of it. There is a small white heart in the upper right corner of this square. In the middle square, which is orange, it reads, "Regal Jumpers make great Pets. They&apos;re cute and soft, come in fun colors, and are low maintainance.". In the last square, which is pink, there is a QR code labeled, "Here&apos;s a video of all the fun colors they come in." Peeking from behind this square you can see a peachy ombre jumping spider head.'
              className="zoom-worthy-image"
              src="/images/regal-jumpers.png"
            />
          </a>
          <figcaption>The polished final draft.</figcaption>
        </figure>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Composition</li>
        <li>Typography</li>
        <li>Color</li>
        <li>Tracing</li>

        <h4>Technologies</h4>
        <li>Adobe Illustrator</li>
      </SkillsNTechnologies>
    </>
  );
}
