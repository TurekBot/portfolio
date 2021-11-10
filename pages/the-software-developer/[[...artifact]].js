import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { useRouter } from "next/dist/client/router";
import AutoDash from "../../components/software-developer-artifacts/AutoDash";

export default function TheSoftwareDeveloper() {
  const router = useRouter();
  const { artifact } = router.query;
  const roleName = "Software Developer"

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
        artifacts={
          <>
            <AutoDash id="auto-dash" />
          </>
        }
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
      </RolePage>
    </>
  );
}
