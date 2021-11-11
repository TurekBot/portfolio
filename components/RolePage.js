import { convertRoleNameToClassName } from "./RoleCard";
import ArtifactCard from "./ArtifactCard";
import HeadStuff from "./HeadStuff";
import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function RolePage(props) {
  const roleClassName = convertRoleNameToClassName(props.pageTitle);

  console.log(props.artifacts);

  console.log("received slug:");
  console.log(props.selectedArtifact);

  const theSelectedArtifact = props.artifacts.get(props.selectedArtifact);

  console.log("selected artifact:");
  console.log(theSelectedArtifact);

  
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
          {props.selectedArtifact ? theSelectedArtifact : props.children}
        </section>
      </main>
      <Footer />
    </>
  );
}
