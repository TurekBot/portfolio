import ArtifactStory from "../ArtifactStory";
import SkillsNTechnologies from "../SkillsNTechnologies";

export default function KidsInAmerica(props) {
  return (
    <>
      <ArtifactStory
        title="Kids In America"
        id={props.id}
        nextArtifactLink={props.nextArtifactLink}
        previousArtifactLink={props.previousArtifactLink}
      >
        <p>
          <a target="_blank" href="https://www.youtube.com/watch?v=qcbUpz3oaSc">
            “🎶We're the kids, we're the kids in America🎵”
          </a>{" "}
          Ahem, I mean they’re the kids in America. (In case you’re lost, that
          line is from a popular song; I heard it first in the Jimmy Neutron
          movie back in 2001. It was a classic for my generation and this song
          has stuck with me ever since.)
        </p>
        <p>
          This map is the result of one of my first dives into data
          visualization. Let me pull back the curtain a bit on how I did it.{" "}
        </p>
        <figure>
          <a target="_blank" href="/images/👶 lt 18—Choropleth Map.svg">
            <img
              className="zoom-worthy-image"
              alt="TODO"
              src="/images/👶 lt 18—Choropleth Map.svg"
            />
          </a>
          <figcaption>
            This kind of "zoned heat map" is called a choropleth map.
          </figcaption>
        </figure>
        <p>
          To create this map, I used the data-oriented R programming language. I
          used data collected by the Census Bureau and was careful in my
          massaging of the data to not try to get it to say anything it didn’t
          truly support.{" "}
        </p>
        <p>
          I started off by showing the number of children by state, but then I
          realized that that wasn't a fair comparison because of course the
          states with bigger populations would have more children: California
          was lit up like a Christmas tree. To make the state-by-state
          comparison fair, <b>I controlled for population</b>; this
          left me with a map that showed not the number of children, but the
          proportion of children (to adults).
        </p>
        <p>
          Once I got the unrefined map from R Studio, I brought it into Adobe
          Illustrator to give it some careful final touches. I gave it a modern
          font and added a call-out that elaborated on the most salient piece of
          the data: Utah. When controlled for population,{" "}
          <b>Utah pops right out</b> as the leader by a huge margin.
          Having grown up in Utah, I succinctly offered some speculation as to
          why this might be, but I also noted that the data does not mean this
          necessarily.
        </p>
      </ArtifactStory>
      <SkillsNTechnologies>
        <h4>Skills</h4>
        <li>Data Crunching</li>
        <li>Data Visualization</li>

        <h4>Technologies</h4>
        <li>Adobe Illustrator</li>
        <li>The R Programming Language</li>
        <li>ggplot2</li>
        <li>CSV</li>

      </SkillsNTechnologies>
    </>
  );
}
