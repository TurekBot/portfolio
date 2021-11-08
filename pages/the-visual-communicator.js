import Head from "next/head";
import HeadStuff from "../components/HeadStuff";
import Navigation from "../components/Navigation";
import RolePage from "../components/RolePage";

export default function TheVisualCommunicator() {
  return (
    <>
      <Head>
        <title>Brad the Visual Communicator</title>
        <HeadStuff />
      </Head>
      <Navigation />
      <RolePage
        pageTitle="Visual Communicator"
        intro="Sed ac enim mollis, vulputate turpis sit amet, sollicitudin eros. Cras justo nunc, consequat sed imperdiet vel, molestie ut ex. Aenean sit amet mi id arcu varius elementum. Quisque dignissim purus quis erat lacinia, et vulputate quam tempor. Duis consectetur quam sed quam hendrerit egestas. Aliquam dictum urna fringilla arcu mattis rhoncus."
      ></RolePage>
    </>
  );
}
