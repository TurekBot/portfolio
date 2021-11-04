import Head from 'next/head'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Bradley Turek's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante justo, at efficitur enim efficitur ut. Fusce luctus turpis sapien, sit amet consequat nisi ultricies nec. Sed sed viverra sem. Nam tincidunt, sapien sed vulputate gravida, est velit faucibus sem, et suscipit sem massa et urna. Cras pharetra metus sit amet maximus mollis. Nulla sed sollicitudin velit, at bibendum mi. Integer et semper velit. Duis dignissim ante tortor, at luctus odio tristique vel. Pellentesque viverra nibh nec libero eleifend ultricies. Phasellus lobortis arcu et est eleifend faucibus. Phasellus nec gravida risus. Suspendisse justo leo, finibus vel maximus sed, dapibus ut metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquam semper dolor et feugiat. Sed tincidunt vehicula varius.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante justo, at efficitur enim efficitur ut. Fusce luctus turpis sapien, sit amet consequat nisi ultricies nec. Sed sed viverra sem. Nam tincidunt, sapien sed vulputate gravida, est velit faucibus sem, et suscipit sem massa et urna. Cras pharetra metus sit amet maximus mollis. Nulla sed sollicitudin velit, at bibendum mi. Integer et semper velit. Duis dignissim ante tortor, at luctus odio tristique vel. Pellentesque viverra nibh nec libero eleifend ultricies. Phasellus lobortis arcu et est eleifend faucibus. Phasellus nec gravida risus. Suspendisse justo leo, finibus vel maximus sed, dapibus ut metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquam semper dolor et feugiat. Sed tincidunt vehicula varius.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante justo, at efficitur enim efficitur ut. Fusce luctus turpis sapien, sit amet consequat nisi ultricies nec. Sed sed viverra sem. Nam tincidunt, sapien sed vulputate gravida, est velit faucibus sem, et suscipit sem massa et urna. Cras pharetra metus sit amet maximus mollis. Nulla sed sollicitudin velit, at bibendum mi. Integer et semper velit. Duis dignissim ante tortor, at luctus odio tristique vel. Pellentesque viverra nibh nec libero eleifend ultricies. Phasellus lobortis arcu et est eleifend faucibus. Phasellus nec gravida risus. Suspendisse justo leo, finibus vel maximus sed, dapibus ut metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquam semper dolor et feugiat. Sed tincidunt vehicula varius.
        </p>
        

      </main>

      <Footer/>

    </div>
  )
}