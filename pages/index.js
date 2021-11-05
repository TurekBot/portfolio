import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import FavIconThings from "../components/FavIconThings";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bradley Turek's Portfolio</title>
        <FavIconThings />
      </Head>

      <Navigation />

      <main>
        <h1 className="title">Man of Many Hats</h1>

        <section className="software-developer">
          <svg id="avatar">
            <use href="/Man.svg#Man"></use>
          </svg>
        </section>
      </main>

      <Footer />
    </div>
  );
}
