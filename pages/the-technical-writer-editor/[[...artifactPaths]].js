import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { generateNextAndPrevious } from "../../components/RolePage";
import SquareKnot from "../../components/technical-writer-editor/SquareKnot";

export default function TheTechnicalWriterEditor() {
  const roleName = "Technical Writer & Editor";


  const squareKnotId = "square-knot";

  const artifacts = new Array(
    <SquareKnot id={squareKnotId}/>,
    <SquareKnot id={squareKnotId}/>,
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
