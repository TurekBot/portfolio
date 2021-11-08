import { convertRoleNametoClassName } from "./RoleCard";

export default function RolePage(props) {
  const roleClassName = convertRoleNametoClassName(props.pageTitle);

  return (
    <main className={roleClassName}>
      <header>
        <h1>Brad the {props.pageTitle}</h1>
        <p>{props.intro}</p>
      </header>

      <style jsx>{`
        h1 {
          text-align: center;
        }
        `}</style>
    </main>
  );
}
