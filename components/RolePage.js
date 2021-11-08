
import { convertRoleNametoClassName } from "./RoleCard";

export default function RolePage(props) {
  const roleClassName = convertRoleNametoClassName(props.pageTitle);

    return (
      <main className={roleClassName}>
        <h1>{props.pageTitle}</h1>
      </main>
      );
  }