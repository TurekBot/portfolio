import { convertRoleNameToClassName } from "./RoleCard";

export default function Navigation() {
  return (
    <section className="left-bar">
      <a href="/">
        <span className="subtitle">Brad Turek</span>
      </a>
      {/* <span className="subliminal-messaging">(He's your guy)</span> */}
      <nav>
        <ul>
          {/* <li><a href="/">Home</a></li> */}
          <li>
            <a
              href="/the-software-developer"
              className={convertRoleNameToClassName("Software Developer")}
            >
              Software Developer
            </a>
          </li>
          <li>
            <a
              href="/the-visual-communicator"
              className={convertRoleNameToClassName("Visual Communicator")}
            >
              Visual Communicator
            </a>
          </li>
          <li>
            <a
              href="/the-ux-designer"
              className={convertRoleNameToClassName("UX Designer")}
            >
              UX Designer
            </a>
          </li>
          <li>
            <a
              href="/the-technical-writer-editor"
              className={convertRoleNameToClassName(
                "Technical Writer & Editor"
              )}
            >
              Technical Writer & Editor
            </a>
          </li>
          <li>
            <a href="/#about-me">About Me</a>
          </li>
        </ul>
      </nav>
      {/* <aside id="dust">
        <span>👷‍♂️</span>
        <h3>Pardon the dust</h3>
        <p>
          I'm still putting the finishing touches on this portfolio. My apologies in advance for any broken links, or unfinished
          pages.
        </p>
      </aside> */}
    </section>
  );
}
