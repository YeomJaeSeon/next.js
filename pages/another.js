import axios from "axios";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Another = (props) => {
  const router = useRouter();
  return (
    <Layout>
      <h1>지인들</h1>
      <ul>
        {props.data.map((person) => {
          return <li key={person.id}>{person.username}</li>;
        })}
      </ul>
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

Another.getInitialProps = async function () {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return { data: response.data };
};

export default Another;
