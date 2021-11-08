import Head from "next/head";
import Footer from "../components/Footer";
import HeadStuff from "../components/HeadStuff";
import Navigation from "../components/Navigation";
import RolePage from "../components/RolePage";

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
            Anybody can write software. I want to write <em>good</em> software.
          </>
        }
      ></RolePage>
      <Footer />
    </>
  );
}
