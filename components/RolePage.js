import { convertRoleNameToClassName } from "./RoleCard";
import ArtifactCard from "./ArtifactCard";
import HeadStuff from "./HeadStuff";
import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function RolePage(props) {
  const roleClassName = convertRoleNameToClassName(props.pageTitle);

  console.log("all artifacts:");
  console.log(props.artifacts);

  console.log("selected artifact:");
  console.log(props.selectedArtifact);

  const artifactCards = props.children;

  
  return (
    <>
      <Head>
        <title>Brad the {props.pageTitle}</title>
        <HeadStuff />
      </Head>
      <Navigation />
      <main className={roleClassName}>
        <header>
          <h1>Brad the {props.pageTitle}</h1>
          <p className="intro">{props.intro}</p>
        </header>
        <section className={props.selectedArtifact ? "artifact-description" : "artifact-cards"}>
          {props.selectedArtifact ? props.selectedArtifact : artifactCards}
        </section>
      </main>
      <Footer />
    </>
  );
}
