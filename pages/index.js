import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import FavIconThings from "../components/FavIconThings";
import RoleCard from "../components/RoleCard";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bradley Turek's Portfolio</title>
        <FavIconThings />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navigation />

      <main>
        <h1 className="title">Man of Many Hats</h1>
        <section id="roleCards">
          <RoleCard roleName="Software Developer" />
          <RoleCard roleName="Visual Communicator" />
          <RoleCard roleName="UX Designer" />
          <RoleCard roleName="Technical Writer &amp; Editor" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
