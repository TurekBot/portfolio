import { convertRoleNametoClassName } from "./RoleCard";

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
              className={convertRoleNametoClassName("Software Developer")}
            >
              Software Developer
            </a>
          </li>
          <li>
            <a
              href="/the-visual-communicator"
              className={convertRoleNametoClassName("Visual Communicator")}
            >
              Visual Communicator
            </a>
          </li>
          <li>
            <a
              href="/the-ux-designer"
              className={convertRoleNametoClassName("UX Designer")}
            >
              UX Designer
            </a>
          </li>
          <li>
            <a
              href="/the-technical-writer-editor"
              className={convertRoleNametoClassName(
                "Technical Writer & Editor"
              )}
            >
              Technical Writer & Editor
            </a>
          </li>
          {/* <li>
            <a href="#">Contact</a>
          </li> */}
        </ul>
      </nav>
    </section>
  );
}
