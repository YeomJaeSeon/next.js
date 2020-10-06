import Link from "next/link";

const Content = (props) => (
  <Link href={`./friend?name=${props.name}&age=${props.age}`}>
    <div>{props.name}</div>
  </Link>
);

const LinkPage = () => {
  return (
    <>
      <Content name="염재선" age={25} />
      <Content name="강수호" age={25} />
      <Content name="김유성" age={24} />
      <Link prefetch href="./another">
        <div>그외 친구들이야!</div>
      </Link>
    </>
  );
};
export default LinkPage;
