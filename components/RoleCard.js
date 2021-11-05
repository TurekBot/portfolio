export default function RoleCard(props) {
  const roleClassName = props.roleName.toLowerCase().replaceAll(" ", "-");
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
