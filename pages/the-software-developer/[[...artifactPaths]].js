import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { useRouter } from "next/dist/client/router";
import AutoDash from "../../components/software-developer-artifacts/AutoDash";
import Challenger from "../../components/software-developer-artifacts/Challeng.er";
import Connect4 from "../../components/software-developer-artifacts/Connect4";
import Knuckles from "../../components/software-developer-artifacts/Knuckles";
import { generateNextAndPrevious } from "../../components/RolePage";

export default function TheSoftwareDeveloper() {
  const router = useRouter();

  // This name, "artifactPaths", matches the name of this file.
  const { artifactPaths } = router.query;
  const roleName = "Software Developer"

  const artifacts = new Array(
    <Knuckles id="knuckles"/>,
    <AutoDash id="auto-dash"/>,
    <Challenger id="challeng.er" />,
    <Connect4 id="connect-4" />
  );

  generateNextAndPrevious(artifacts, roleName);
  
  const selectedArtifactId = (artifactPaths) ? artifactPaths[0] : null; 

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
        selectedArtifactId={selectedArtifactId}
      >
        <ArtifactCard
          parent={roleName}
          id="knuckles"
          thumbnail="/images/undraw_scrum_board.svg"
          artifactTitle="Agile Team: Knuckle's Dojo Scheduler"
          hook={
            <span>
              It's all about delivering early and often—and listening to your customers!
            </span>
          }
        />
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
          thumbnail="/images/Challeng.er-diagrams-screenshot.png"
          artifactTitle="Challeng.er"
          hook={
            <span>
              You can’t do a marathon during COVID. Or can you?
            </span>
          }
        />
           <ArtifactCard
          parent={roleName}
          id="connect-4"
          thumbnail="/images/connect-4.gif"
          artifactTitle="Connect 4 Game"
          hook={
            <span>
              Plink, plink-plink. It’s Connect 4. Now appearing digitally—in both text-based and graphical flavors.
            </span>
          }
        />
      </RolePage>
    </>
  );
}
