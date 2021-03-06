import ArtifactCard from "./ArtifactCard";

export default function PlaceholderArtifactCard(props) {
  const placeholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='213px' height='213px' id='placeholder' overflow='visible' x='0' y='0'%3E%3Cpath d='M 0,0 L 213,0 L 213,213 L 0,213 Z' stroke-width='null' fill='%23ffffff' stroke-linecap='butt' transform='translate(0 0) rotate(0) scale(1 1) ' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M2.755,7h-2.5L0.25,1.501c0-0.69,0.559-1.25,1.249-1.251c0,0,0,0,0.001,0c0.139,0,0.272,0.022,0.396,0.064C2.02,0.273,2.151,0.251,2.288,0.25L5,0.239v2.5L2.751,2.748L2.755,7z' transform='translate(0 0) rotate(0) scale(1 1) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M0,2.739v-2.5l66-0.26v2.5L0,2.739z' transform='translate(4.75 0) rotate(0) scale(3.0681818181818183 1) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M5.98,7h-2.5l0.001-4.534L0,2.479v-2.5l5.983-0.023L5.98,7z' transform='translate(207 0) rotate(0) scale(1 1) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M5.98,0L5.96,67h-2.5L3.48,0H5.98z' transform='translate(207 6.75) rotate(0) scale(1 3.0074626865671643) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M5.96,0L5.958,4.704L0,4.709V2.212l3.46-0.004L3.46,0H5.96z' transform='translate(207 208) rotate(0) scale(1 1) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M0,4.886V2.385l0.452,0.009L31.5,2.25L66,2.212v2.497L20.5,4.75L0.437,4.894L0,4.886z' transform='translate(4.75 208) rotate(0) scale(3.0681818181818183 1) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M2.82,2.345L5,2.385v2.501L0.321,4.8V3.357L0.318,0h2.5L2.82,2.345z' transform='translate(0 208) rotate(0) scale(1 1) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M2.755,0l0.063,67h-2.5L0.255,0H2.755z' transform='translate(0 6.75) rotate(0) scale(1 3.0074626865671643) ' fill='%23000000' fill-opacity='1'%3E%3C/path%3E%3Cpath d='M 5,5 L 208,208 M 5,208 L 208,5 ' stroke-width='3' fill='none' stroke-linecap='butt' transform='translate(0 0) rotate(0) scale(1 1) ' stroke='%235c5c5e' fill-opacity='1'%3E%3C/path%3E%3C/svg%3E";

  return (
    <ArtifactCard
      parent={undefined}
      id="none"
      thumbnail={placeholder}
      artifactTitle="Artifact Title"
      hook="Duis consectetur quam sed quam hendrerit egestas. Aliquam dictum urna fringilla arcu mattis rhoncus."
    />
  );
}
