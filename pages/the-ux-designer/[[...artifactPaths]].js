import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { generateNextAndPrevious } from "../../components/RolePage";

import IssueTracker from "../../components/ux-designer/IssueTracker";
import MrPoorCollegeStudent from "../../components/ux-designer/MrPoorCollegeStudent";
import ChallengerPrototype from "../../components/ux-designer/ChallengerPrototype";

export default function TheUxDesigner() {
  const roleName = "UX Designer";

  const issueTrackerId = "issue-tracker";
  const mrPoorCollegeStudentId = "mr-poor-college-student";
  const challengerPrototypeId = "challeng.er-prototype";

  const artifacts = new Array(
    <IssueTracker id={issueTrackerId} />,
    <MrPoorCollegeStudent id={mrPoorCollegeStudentId} />,
    <ChallengerPrototype id={challengerPrototypeId} />,
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
          id={issueTrackerId}
          thumbnail="/images/heuristic-evaluation.png"
          artifactTitle="Issue Tracker: Wireframes & Heuristic Evaluation"
          hook={
            <span>Not as good as a user test, but better than nothing.</span>
          }
        />
        <ArtifactCard
          parent={roleName}
          id={mrPoorCollegeStudentId}
          thumbnail="/images/mr-poor-college-student.png"
          artifactTitle="Mr. Poor College Student: A Persona"
          hook={
            <span>
              "I don't want anyone to know, but sometimes, when I'm out of milk,
              I put water in my cereal."
            </span>
          }
        />
        <ArtifactCard
          parent={roleName}
          id={challengerPrototypeId}
          thumbnail="/images/Challeng.er-prototype.png"
          artifactTitle="Challeng.er Click-through Prototype"
          hook={
            <span>
              “If a picture is worth a thousand words, a prototype is worth a
              thousand meetings” <br/>―IDEO.org
            </span>
          }
        />
      </RolePage>
    </>
  );
}
