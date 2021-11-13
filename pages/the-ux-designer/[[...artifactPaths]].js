import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { generateNextAndPrevious } from "../../components/RolePage";

import IssueTracker from "../../components/ux-designer/IssueTracker";

export default function TheUxDesigner() {
  const roleName = "UX Designer";

  const issueTrackerId = "issue-tracker";
  const mrPoorCollegeStudentId = "mr-poor-college-student";

  const artifacts = new Array(
    <IssueTracker id={issueTrackerId} />,
    <IssueTracker id={issueTrackerId} />
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
          thumbnail="/images/harmony.png"
          artifactTitle="Issue Tracker: Wireframes & Heuristic Evaluation"
          hook={<span>Simple, yet colorful and profound.</span>}
        />
        <ArtifactCard
          parent={roleName}
          id={mrPoorCollegeStudentId}
          thumbnail="/images/harmony.png"
          artifactTitle="Mr. Poor College Student: A Persona"
          hook={<span>Simple, yet colorful and profound.</span>}
        />
      </RolePage>
    </>
  );
}
