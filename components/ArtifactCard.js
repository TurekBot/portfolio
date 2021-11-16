import { convertRoleNameToPageName } from "./RoleCard";

export default function ArtifactCard(props) {
  const linkHref =
    props.id && props.parent
      ? convertRoleNameToPageName(props.parent) + "/" + props.id
      : "#";

  return (
    <figure className={"artifact-card " + props.id}>
      <a href={linkHref}>
        <img src={props.thumbnail} />
      </a>
      <figcaption>
        <h1>{props.artifactTitle}</h1>
        <p>{props.hook}</p>
      </figcaption>
      <a href={linkHref} className="see-more-button">
        See more...
      </a>
      <style jsx>{`
        figure {
          text-align: center;
        }
        h1 {
          margin: 0;
        }
      `}</style>
    </figure>
  );
}
