import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { useRouter } from "next/dist/client/router";
import AutoDash from "../../components/software-developer-artifacts/AutoDash";
import PlaceholderArtifactCard from "../../components/PlaceholderArtifactCard";
import Challenger from "../../components/software-developer-artifacts/Challeng.er";
import Connect4 from "../../components/software-developer-artifacts/Connect4";
import Knuckles from "../../components/software-developer-artifacts/Knuckles";
import ColoringWords from "../../components/visual-communicator/ColoringWords";

export default function TheVisualCommunicator() {
  const router = useRouter();
  const { artifactPaths } = router.query;
  const roleName = "Visual Communicator"

  const artifacts = new Map([
    ["coloring-words", <ColoringWords/>],
  ]);

  const selectedArtifact = (artifactPaths) ? artifactPaths[0] : null; 

  return (
    <>
      <RolePage
        pageTitle={roleName}
        intro={
          <>
            My mantra: CRAP, CRAP, CRAP. (Contrast, Repetition, Alignment, Proximity—what were <em>you</em> thinking?)
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
        
      </RolePage>
    </>
  );
}
