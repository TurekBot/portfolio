import RolePage from "../../components/RolePage";
import ArtifactCard from "../../components/ArtifactCard";
import { useRouter } from "next/dist/client/router";

export default function TheSoftwareDeveloper() {

  const router = useRouter();
  const {artifact} = router.query;
  
  return (
    <>
      <RolePage
        pageTitle="Software Developer"
        intro={
          <>
            Anybody can write software—not everyone can write software for{" "}
            <em>humans</em>.
          </>
        }
      >
        <ArtifactCard
          thumbnail="/images/AutoDash.gif"
          artifactTitle="AutoDash"
          hook={
            <span>
              Em dashes should be easy to type—but they’re not. AutoDash fixes
              that.
            </span>
          }
        />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
      </RolePage>
    </>
  );
}
