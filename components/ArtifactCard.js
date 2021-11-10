import { convertRoleNameToPageName } from "./RoleCard";

export default function ArtifactCard(props) {
  const linkHref = convertRoleNameToPageName(props.parent) + "/" + props.id;

  return (
    <a href={props.id && props.parent ? linkHref : "#"}>
      <figure>
        {props.thumbnail ? <img src={props.thumbnail} /> : placeholder}
        <figcaption>
          <h1>{props.artifactTitle}</h1>
          <p>{props.hook}</p>
        </figcaption>
        <style jsx>{`
          figure {
            text-align: center;
          }
          h1 {
            margin: 0;
          }
        `}</style>
      </figure>
    </a>
  );
}
