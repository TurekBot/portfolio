import { convertRoleNameToClassName } from "./RoleCard";
import ArtifactCard from "./ArtifactCard";
import HeadStuff from "./HeadStuff";
import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function RolePage(props) {
  const roleClassName = convertRoleNameToClassName(props.pageTitle);

  const placeholderCards = (
    <>
      <ArtifactCard />
      <ArtifactCard />
      <ArtifactCard />
      <ArtifactCard />
      <ArtifactCard />
      <ArtifactCard />
      <ArtifactCard />
    </>
  );

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
        <section className="artifacts">
          {props.children ? props.children : placeholderCards}
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .intro {
          text-align: center;
        }
      `}</style>
    </>
  );
}
