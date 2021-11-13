export default function ArtifactStory(props) {

  return (
    <>
    <section className="artifact-story">
      <h2>{props.title}</h2>
      {props.children}

      <nav>
        <a className="previous-button" href={props.previousArtifactLink}>
            Previous
          </a>
          <a className="next-button" href={props.nextArtifactLink}>
            Next
          </a>
        </nav>
      </section>
    </>
  );
}
