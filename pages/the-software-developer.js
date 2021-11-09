import Head from "next/head";
import Footer from "../components/Footer";
import HeadStuff from "../components/HeadStuff";
import Navigation from "../components/Navigation";
import RolePage from "../components/RolePage";
import ArtifactCard from "../components/ArtifactCard";

export default function TheSoftwareDeveloper() {
  return (
    <>
      <Head>
        <title>Brad the Software Developer</title>
        <HeadStuff />
      </Head>
      <Navigation />
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
      <Footer />
    </>
  );
}
