import { convertRoleNameToClassName } from "./RoleCard";
import { convertRoleNameToPageName } from "./RoleCard";
import React from "react";
import HeadStuff from "./HeadStuff";
import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { useRouter } from "next/dist/client/router";

export default function RolePage(props) {

  const router = useRouter();

  // This name, "artifactPaths", matches the name of this file.
  const { artifactPaths } = router.query;
  const selectedArtifactId = (artifactPaths) ? artifactPaths[0] : null; 

  const roleClassName = convertRoleNameToClassName(props.pageTitle);

  console.log("selected artifact id:");
  console.log(props.selectedArtifactId);

  const artifactCards = props.children;

  const selectedArtifact = getSelectedArtifact(props.artifacts, selectedArtifactId);
  
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
        <section className={selectedArtifact ? "artifact-description" : "artifact-cards"}>
          {selectedArtifact ? selectedArtifact : artifactCards}
        </section>
      </main>
      <Footer />
    </>
  );
}

export function generateNextAndPrevious(artifacts, roleName) {
  artifacts.forEach((element, index) => {
    const lastIndex = artifacts.length - 1;

    let next = index + 1;
    let previous = index - 1;

    if (index === 0) {
      previous = artifacts.length - 1;
    }
    if (index === lastIndex) {
      next = 0;
    }

    const nextLink =
      "/" +
      convertRoleNameToPageName(roleName) +
      "/" +
      artifacts[next].props.id;
    const previousLink =
      "/" +
      convertRoleNameToPageName(roleName) +
      "/" +
      artifacts[previous].props.id;

    // Add the new props to the component
    const newElement = React.cloneElement(element, {
      nextArtifactLink: nextLink,
      previousArtifactLink: previousLink,
    });
    artifacts[index] = newElement;
  });
}


function getSelectedArtifact(artifacts, selectedArtifactId) {
  return artifacts.reduce((previousElement, currentElement) => {
    if (previousElement && previousElement.props.id === selectedArtifactId) {
      return previousElement;
    } else if (
      currentElement &&
      currentElement.props.id === selectedArtifactId
    ) {
      return currentElement;
    } else {
      return undefined;
    }
  });
}
