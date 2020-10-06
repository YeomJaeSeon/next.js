import { useRouter } from "next/router";
import Layout from "../components/Layout";

const friend = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.name}</h1>
      <h2>나이 : {router.query.age}</h2>
      <button
        onClick={() => {
          router.push("./");
        }}
      >
        Home
      </button>
    </Layout>
  );
};
export default friend;
