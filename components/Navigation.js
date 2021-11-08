

export default function Navigation() {
    return (
      <section className="left-bar">
        <a href="/"><span className="subtitle">Bradley Turek</span></a>
        {/* <span className="subliminal-messaging">(He's your guy)</span> */}
        <nav>
          <ul>
          {/* <li><a href="/">Home</a></li> */}
          <li><a href="the-software-developer">Software Developer</a></li>
          <li><a href="the-visual-communicator">Visual Communicator</a></li>
          <li><a href="the-ux-designer">UX Designer</a></li>
          <li><a href="the-technical-writer-editor">Technical Writer & Editor</a></li>
          <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </section>);
  }