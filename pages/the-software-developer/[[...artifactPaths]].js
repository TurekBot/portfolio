import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { generateNextAndPrevious } from "../../components/RolePage";

import AutoDash from "../../components/software-developer-artifacts/AutoDash";
import Challenger from "../../components/software-developer-artifacts/Challeng.er";
import Connect4 from "../../components/software-developer-artifacts/Connect4";
import Knuckles from "../../components/software-developer-artifacts/Knuckles";

export default function TheSoftwareDeveloper() {
  const roleName = "Software Developer";

  const knucklesId = "knuckles";
  const autoDashId = "auto-dash";
  const challengerId = "challeng.er";
  const connect4Id = "connect-4";

  const artifacts = new Array(
    <Knuckles id={knucklesId} />,
    <AutoDash id={autoDashId} />,
    <Challenger id={challengerId} />,
    <Connect4 id={connect4Id} />
  );

  generateNextAndPrevious(artifacts, roleName);

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
      >
        <ArtifactCard
          parent={roleName}
          id={knucklesId}
          thumbnail="/images/undraw_scrum_board.svg"
          artifactTitle="Agile Team: Knuckle's Dojo Scheduler"
          hook={
            <span>
              It's all about delivering early and often—and listening to your
              customers!
            </span>
          }
        />
        <ArtifactCard
          parent={roleName}
          id={autoDashId}
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
          id={challengerId}
          thumbnail="/images/Challeng.er-diagrams-screenshot.png"
          artifactTitle="Challeng.er"
          hook={<span>You can’t do a marathon during COVID. Or can you?</span>}
        />
        <ArtifactCard
          parent={roleName}
          id={connect4Id}
          thumbnail="/images/connect-4.gif"
          artifactTitle="Connect 4 Game"
          hook={
            <span>
              Plink, plink-plink. It’s Connect 4. Now appearing digitally—in
              both text-based and graphical flavors.
            </span>
          }
        />
      </RolePage>
    </>
  );
}
