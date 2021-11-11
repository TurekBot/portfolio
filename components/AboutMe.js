export default function AboutMe() {
  const myMechanics = "https://www.youtube.com/watch?v=U2jNeObHnZY&t=2s";
  const lubalin = "https://www.tiktok.com/@lubalin/video/6938455969898745094";
  const stuffMadeHere =
    "https://www.youtube.com/c/StuffMadeHere/videos?view=0&sort=p&flow=grid";

  return (
    <section id="about-me">
      <section>
        <figure>
          <img
            width="100%"
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/12742033_10208374309346000_5438003255211189640_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=cQVPGgOEa7wAX_VHVc-&_nc_ht=scontent-dfw5-1.xx&oh=7fc177deb6505f1bae4f30780c724c5c&oe=61B2B60A"
          />
          <figcaption>
            My beautiful wife and I on a tandem bike in sunny St. George, UT.
          </figcaption>
        </figure>
        <figure>
          <video
            controls
            loop
            autoPlay
            muted
            src="/images/going-to-the-river.mp4"
            width="100%"
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can{" "}
            <a href="/images/going-to-the-river.mp4">download it</a>
            and watch it with your favorite video player!
          </video>
          <figcaption>
            Off to the river with the boys! <br />
            (Sound on to hear a little "Here we go! 🙌")
          </figcaption>
        </figure>
      </section>
      <section>
        <h1>Hi, the name's Brad.</h1>
        <p>I'm a lot of things. But, above all, I'm a husband and father.</p>
        <p>
          In my career, I want to champion and create not just software, but
          software that <em>works</em>—like really well.
        </p>
        <h3>Free time</h3>
        <p>
          On the weekends, I like to take my kids out in the bike trailer to new
          and exciting places.
        </p>
        <p>
          I enjoy the occasional TikTok or YouTube video. Some of my favorites
          lately are
          <ul>
            <li>
              Lubalin's{" "}
              <a href={lubalin}>turning of internet drama into songs</a>,
            </li>
            <li>
              the <a href={stuffMadeHere}>superhuman gadgetry</a> by Stuff Made
              Here, and
            </li>
            <li>
              some supremely{" "}
              <a href={myMechanics}>satisfying tool restorations</a> by a very
              talented Swiss man.
            </li>
          </ul>
        </p>
        <h3>Leave it better than you found it.</h3>
        <p>
          It's the motto I can't seem to stop living by. 😅 I find a typo, I let
          somebody know. I see some litter, I pick it up. I think of a better
          way, I pitch it.
        </p>
        <p>
          It's the right thing to do, I figure. We're all in this together,
          after all.
        </p>
        <br />
        <p>
          Thanks for taking a look,
          <img
            id="signature"
            alt="My handwritten signature: Brad"
            src="/images/First Name Signature.svg"
          ></img>
        </p>
      </section>
      <style jsx>{`
        a {
          text-decoration: underline;
        }

        #about-me {
          display: flex;
          padding: 2em;
          flex-direction: row;
          gap: 3em;
          align-items: start;
          justify-content: space-between;
        }

        h1,
        h2,
        h3 {
          margin: 0 0 0.25em 0;
          text-align: left;
        }
        h1 {
          font-size: 2.5em;
          line-height: 0.75;
        }

        h1 + p,
        h2 + p,
        h3 + p {
          margin-top: 0;
        }
        section:first-of-type {
          max-width: 45%;
        }

        section:last-of-type {
          flex-grow: 1;
          flex-basis: auto;
        }

        footer {
          align-self: center;
          background-color: red;
        }

        figure {
          margin: 0;
          margin-bottom: 2em;
        }

        figcaption {
          text-align: center;
        }

        #signature {
          margin-top: 1em;
          display: block;
          height: 4em;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
