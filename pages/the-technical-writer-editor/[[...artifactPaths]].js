import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { generateNextAndPrevious } from "../../components/RolePage";
import SquareKnot from "../../components/technical-writer-editor/SquareKnot";
import CsHandouts from "../../components/technical-writer-editor/CsHandouts";

export default function TheTechnicalWriterEditor() {
  const roleName = "Technical Writer & Editor";

  const squareKnotId = "square-knot";
  const csHandoutsId = "cs-handouts";

  const artifacts = new Array(
    <SquareKnot id={squareKnotId} />,
    <CsHandouts id={csHandoutsId} />
  );

  generateNextAndPrevious(artifacts, roleName);

  return (
    <>
      <RolePage
        pageTitle={roleName}
        intro={<>{/* TODO */}</>}
        artifacts={artifacts}
      >
        <ArtifactCard
          parent={roleName}
          id={csHandoutsId}
          thumbnail="/images/comparing-psp.gif"
          artifactTitle="CS Handouts: A Glow-Up"
          hook={<span>Glow-Up: an incredible transformation </span>}
        />
        <ArtifactCard
          parent={roleName}
          id={squareKnotId}
          thumbnail="/images/step-5.gif"
          artifactTitle="How to Tie a Square Knot: an Animated Infographic"
          hook={
            <span>
              Everyone knows the square knot. Not everyone knows (how to tie)
              the square knot. It was my aim to change that.
            </span>
          }
        />
      </RolePage>
    </>
  );
}