export default function RoleCard(props) {
  const roleClassName = props.roleName
    .toLowerCase()
    // Replace all non CSS identifier characters (like spaces or special characters) with a hyphen.
    .replaceAll(/[^_a-zA-Z]+[^_a-zA-Z0-9-]*/g, "-");

  return (
    <section className={"role " + roleClassName}>
      <svg
        width="5em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 57 91"
        id="avatar"
      >
        <use href="/Man.svg#Man"></use>
      </svg>
      Brad The {props.roleName}
    </section>
  );
}
