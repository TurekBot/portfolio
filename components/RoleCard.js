export default function RoleCard(props) {
  const roleClassName = props.roleName
    .toLowerCase()
    // Replace all non CSS identifier characters (like spaces or special characters) with a hyphen.
    .replaceAll(/[^_a-zA-Z]+[^_a-zA-Z0-9-]*/g, "-");

  return (
    <a href={"/the-" + roleClassName}>
      <section className={"roleCard " + roleClassName}>
        <div>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 57 91"
            class="avatar"
          >
            <use href="/Man.svg#Man"></use>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            class="role-icon"
          >
            <use href={"/role-icons.svg#" + roleClassName}></use>
          </svg>
        </div>
        Brad The {props.roleName}
      </section>
    </a>
  );
}
