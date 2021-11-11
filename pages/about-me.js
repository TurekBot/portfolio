import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import HeadStuff from "../components/HeadStuff";
import RoleCard from "../components/RoleCard";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>All about Brad</title>
        <HeadStuff />
      </Head>

      <Navigation />

      <main>
        
      </main>

      <Footer />
    </div>
  );
}
