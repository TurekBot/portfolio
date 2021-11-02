import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<section className="left-bar">
<span className="subtitle">Bradley Turek</span>
        <span className="subliminal-messaging">(He's your guy)</span>
      <nav>
          <ul>
          <a href="#"><li>Home</li></a>
            <a href="#"><li>Brad the Husband &amp; Father</li></a>
            <a href="#"><li>Brad the Software Developer</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </nav>
        </section>

      <main>
        <h1 className="title">
          Man of Many Hats
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante justo, at efficitur enim efficitur ut. Fusce luctus turpis sapien, sit amet consequat nisi ultricies nec. Sed sed viverra sem. Nam tincidunt, sapien sed vulputate gravida, est velit faucibus sem, et suscipit sem massa et urna. Cras pharetra metus sit amet maximus mollis. Nulla sed sollicitudin velit, at bibendum mi. Integer et semper velit. Duis dignissim ante tortor, at luctus odio tristique vel. Pellentesque viverra nibh nec libero eleifend ultricies. Phasellus lobortis arcu et est eleifend faucibus. Phasellus nec gravida risus. Suspendisse justo leo, finibus vel maximus sed, dapibus ut metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquam semper dolor et feugiat. Sed tincidunt vehicula varius.
        </p>
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
     
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          --nav-width: 230px;
        }

        section.left-bar {
          background-color: #335f70;
          color: white;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: var(--nav-width);
          padding-top: 10px;
          padding-left: 10px;
        }

        nav ul {
          list-style-type:none;
          padding-inline-start: 0px;
          line-height: 2em;
        }

        nav > ul > li:hover {
          color: black;
          background-color: white;
        }


        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: var(--nav-width);
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .subtitle {
          display: block;
          font-size: 20pt;
        }

        .subliminal-messaging {
          display: block;
          font-size: 8pt;
          line-height: 8pt;
        }


        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
