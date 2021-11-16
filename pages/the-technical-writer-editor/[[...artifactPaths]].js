import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { generateNextAndPrevious } from "../../components/RolePage";
import SquareKnot from "../../components/technical-writer-editor/SquareKnot";
import CsHandouts from "../../components/technical-writer-editor/CsHandouts";
import EditingTeamSport from "../../components/technical-writer-editor/EditingTeamSport";
import CaseOfTheClipboard from "../../components/technical-writer-editor/CaseOfTheClipboard";

export default function TheTechnicalWriterEditor() {
  const roleName = "Technical Writer & Editor";

  const squareKnotId = "square-knot";
  const csHandoutsId = "cs-handouts";
  const editingTeamSportId = "editing-team-sport";
  const caseOfTheClipboardId = "case-of-the-clipboard";

  const artifacts = new Array(
    <SquareKnot id={squareKnotId} />,
    <CsHandouts id={csHandoutsId} />,
    <EditingTeamSport id={editingTeamSportId} />,
    <CaseOfTheClipboard id={caseOfTheClipboardId} />
  );

  generateNextAndPrevious(artifacts, roleName);

  return (
    <>
      <RolePage
        pageTitle={roleName}
        intro={
          <>
            Four basic premises of writing: clarity, brevity, simplicity, and
            humanity.
            <br />
            —William Zinsser
          </>
        }
        artifacts={artifacts}
      >
        <ArtifactCard
          parent={roleName}
          id={csHandoutsId}
          thumbnail="/images/comparing-psp.gif"
          artifactTitle="CS Handouts: A Glow-Up"
          hook={
            <span>
              glow-up noun. /ɡloʊ ˌʌp/
              <br />: an incredible transformation{" "}
            </span>
          }
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
        <ArtifactCard
          parent={roleName}
          id={editingTeamSportId}
          thumbnail="/images/copymarking.png"
          artifactTitle="Editing: a Team Sport"
          hook={<span>Learning the language of the editor.</span>}
        />
        <ArtifactCard
          parent={roleName}
          id={caseOfTheClipboardId}
          thumbnail="/images/clipboard-demo.gif"
          artifactTitle="The Case of the Clipboard"
          hook={
            <span>
              When you stumble upon a bug, you think you’re going crazy—and you
              usually are—but this time I really found one.
            </span>
          }
        />
      </RolePage>
    </>
  );
}
