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

  // This name, "artifactPaths", matches the name of the role "page" files (see /pages directory).
  // The double braces make it optional and the ... makes it get all slugs, not just the first.
  // The artifactPaths array will capture everything after the role page's slug. For example
  // /the-visual-communicator/kids-in-america
  // anything after this point↑.
  // We only need the first one, though.
  // For more clarity, look here: https://nextjs.org/docs/routing/dynamic-routes
  const { artifactPaths } = router.query;
  const selectedArtifactId = artifactPaths ? artifactPaths[0] : null;

  console.log("selected artifact id:");
  console.log(props.selectedArtifactId);

  const selectedArtifact = getSelectedArtifact(
    props.artifacts,
    selectedArtifactId
  );

  const roleClassName = convertRoleNameToClassName(props.pageTitle);

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
        <section
          className={
            selectedArtifact ? "artifact-description" : "artifact-cards"
          }
        >
          {selectedArtifact ? selectedArtifact : artifactCards}
        </section>
      </main>
      <Footer />
    </>
  );
}

/**
 * Goes through the list and gives everyone a next and a previous (based on their order in the array.)
 * @param {*} artifacts an array of artifact components
 * @param {*} roleName we'll turn this into a slug
 */
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
