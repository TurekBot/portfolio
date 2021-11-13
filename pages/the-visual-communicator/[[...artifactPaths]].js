import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { useRouter } from "next/dist/client/router";
import ColoringWords from "../../components/visual-communicator/ColoringWords";
import RegalJumpers from "../../components/visual-communicator/RegalJumpers";

export default function TheVisualCommunicator() {
  const router = useRouter();
  const { artifactPaths } = router.query;
  const roleName = "Visual Communicator"

  const artifacts = new Map([
    ["coloring-words", <ColoringWords/>],
    ["regal-jumpers", <RegalJumpers/>],
  ]);

  const selectedArtifact = (artifactPaths) ? artifactPaths[0] : null; 

  return (
    <>
      <RolePage
        pageTitle={roleName}
        intro={
          <>
            My mantra: CRAP, CRAP, CRAP. (Contrast, Repetition, Alignment, Proximity—what were <em>you</em> thinking? 😄)
            {/* TODO: Revise! 😂 */}
          </>
        }
        artifacts={artifacts}
        selectedArtifact={selectedArtifact}
      >
        <ArtifactCard
          parent={roleName}
          id="coloring-words"
          thumbnail="/images/harmony.png"
          artifactTitle="Coloring Words"
          hook={
            <span>
              Simple, yet colorful and profound.
            </span>
          }
        />
        <ArtifactCard
          parent={roleName}
          id="regal-jumpers"
          thumbnail="/images/surprise-jumper.png"
          artifactTitle="Regal Jumpers"
          hook={
            <span>
              Jumping spiders are like dogs. They can bite you, but they generally don’t. 
            </span>
          }
        />
        
      </RolePage>
    </>
  );
}
