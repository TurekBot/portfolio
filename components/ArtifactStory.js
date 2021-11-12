export default function ArtifactStory(props) {
  return (
    <section class="artifact-story">
      <h2>{props.title}</h2>
      {props.children}
      </section>
  );
}
