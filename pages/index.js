import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import HeadStuff from "../components/HeadStuff";
import RoleCard from "../components/RoleCard";
import AboutMe from "../components/AboutMe";

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Brad Turek's Portfolio</title>
        <HeadStuff />
      </Head>

      <Navigation />

      <main>
        <header>
          <h1 className="title">Brad Turek</h1>
          <p className="intro">I'm kind of a jack of all trades—if I can't do it, I'll learn how. Check out my work below.</p>
        </header>
        <section id="roleCards">
          <RoleCard roleName="Software Developer" />
          <RoleCard roleName="Visual Communicator" />
          <RoleCard roleName="UX Designer" />
          <RoleCard roleName="Technical Writer &amp; Editor" />
        </section>
        <AboutMe/>
      </main>

      <Footer />
    </div>
  );
}
