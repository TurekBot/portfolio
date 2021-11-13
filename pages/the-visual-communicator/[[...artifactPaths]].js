import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { generateNextAndPrevious } from "../../components/RolePage";

import ColoringWords from "../../components/visual-communicator/ColoringWords";
import RegalJumpers from "../../components/visual-communicator/RegalJumpers";
import KidsInAmerica from "../../components/visual-communicator/KidsInAmerica";
import JawDrop from "../../components/visual-communicator/JawDrop";


export default function TheVisualCommunicator() {
  const roleName = "Visual Communicator";

  const artifacts = new Array(
    <ColoringWords id="coloring-words" />,
    <RegalJumpers id="regal-jumpers" />,
    <KidsInAmerica id="kids-in-america" />,
    <JawDrop id="jaw-drop" />
  );

  generateNextAndPrevious(artifacts, roleName);

  return (
    <>
      <RolePage
        pageTitle={roleName}
        intro={
          <>
            My mantra: CRAP, CRAP, CRAP. (Contrast, Repetition, Alignment,
            Proximity—what were <em>you</em> thinking? 😄)
            {/* TODO: Revise! 😂 */}
          </>
        }
        artifacts={artifacts}
      >
        <ArtifactCard
          parent={roleName}
          id="coloring-words"
          thumbnail="/images/harmony.png"
          artifactTitle="Coloring Words"
          hook={<span>Simple, yet colorful and profound.</span>}
        />
        <ArtifactCard
          parent={roleName}
          id="regal-jumpers"
          thumbnail="/images/surprise-jumper.png"
          artifactTitle="Regal Jumpers"
          hook={
            <span>
              Jumping spiders are like dogs. They <em>can</em> bite you, but
              they generally <em>don’t</em>.
            </span>
          }
        />
        <ArtifactCard
          parent={roleName}
          id="kids-in-america"
          thumbnail="/images/👶 lt 18—Choropleth Map.svg"
          artifactTitle="Kids in America"
          hook={
            <span>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=qcbUpz3oaSc"
              >
                “🎶We're the kids, we're the kids in America🎵”
              </a>{" "}
              Ahem, I mean <em>they’re</em> the kids in America.
            </span>
          }
        />
        <ArtifactCard
          parent={roleName}
          id="jaw-drop"
          thumbnail="/images/jaw-drop.png"
          artifactTitle="My jaw didn't drop: it shattered"
          hook={
            <span>Something about movement really commands attention.</span>
          }
        />
      </RolePage>
    </>
  );
}
