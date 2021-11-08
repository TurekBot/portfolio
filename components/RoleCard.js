export default function RoleCard(props) {
  const roleClassName = convertRoleNametoClassName(props.roleName);

  return (
    <a href={"/the-" + roleClassName}>
      <section className={"roleCard " + roleClassName}>
        <div>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 57 91"
            className="avatar"
          >
            <use href="/Man.svg#Man"></use>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            className="role-icon"
          >
            <use href={"/role-icons.svg#" + roleClassName}></use>
          </svg>
        </div>
        Brad the {props.roleName}
      </section>
    </a>
  );
}

export function convertRoleNametoClassName(roleName) {
  return roleName
    .toLowerCase()
    // Replace all non CSS identifier characters (like spaces or special characters) with a hyphen.
    .replaceAll(/[^_a-zA-Z]+[^_a-zA-Z0-9-]*/g, "-");
}
