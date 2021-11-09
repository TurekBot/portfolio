import { convertRoleNametoClassName } from "./RoleCard";
import ArtifactCard from "./ArtifactCard";

export default function RolePage(props) {
  const roleClassName = convertRoleNametoClassName(props.pageTitle);

  return (
    <main className={roleClassName}>
      <header>
        <h1>Brad the {props.pageTitle}</h1>
        <p className="intro">{props.intro}</p>
      </header>
      <section className="artifacts">
        <ArtifactCard thumbnail="/images/AutoDash.gif" artifactTitle="AutoDash" hook={<span>Em dashes should be easy to type—but they’re not. AutoDash fixes that.</span>} />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
        <ArtifactCard />
      </section>

      <style jsx>{`
      .intro {
        text-align: center;
      }
      `}</style>
    </main>
  );
}
