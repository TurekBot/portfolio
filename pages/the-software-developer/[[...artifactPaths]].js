import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { useRouter } from "next/dist/client/router";
import AutoDash from "../../components/software-developer-artifacts/AutoDash";
import PlaceholderArtifactCard from "../../components/PlaceholderArtifactCard";
import Challenger from "../../components/software-developer-artifacts/Challeng.er";

export default function TheSoftwareDeveloper() {
  const router = useRouter();
  const { artifactPaths } = router.query;
  const roleName = "Software Developer"

  const artifacts = new Map([
    ["auto-dash", <AutoDash/>],
    ["challeng.er", <Challenger/>]
  ]);

  // We only care about
  const selectedArtifact = (artifactPaths) ? artifactPaths[0] : null; 

  return (
    <>
      <RolePage
        pageTitle={roleName}
        intro={
          <>
            Anybody can write software—not everyone can write software for{" "}
            <em>humans</em>.
          </>
        }
        artifacts={artifacts}
        selectedArtifact={selectedArtifact}
      >
        <ArtifactCard
          parent={roleName}
          id="auto-dash"
          thumbnail="/images/AutoDash.gif"
          artifactTitle="AutoDash"
          hook={
            <span>
              Em dashes should be easy to type—but they’re not. AutoDash fixes
              that.
            </span>
          }
        />
        <ArtifactCard
          parent={roleName}
          id="challeng.er"
          thumbnail="/images/Challeng.er-screenshot.png"
          artifactTitle="Challeng.er"
          hook={
            <span>
              You can’t do a marathon during COVID. Or can you?
            </span>
          }
        />
      </RolePage>
    </>
  );
}
