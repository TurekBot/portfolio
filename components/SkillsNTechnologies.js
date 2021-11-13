export default function SkillsNTechnologies(props) {
  return (
    <aside className="skills-n-technologies">
      <div className="sticky-enabler">
        <h3>Skills &amp; Technologies</h3>
        <ul>{props.children}</ul>
      </div>
    </aside>
  );
}
