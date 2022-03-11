import type { NextPage } from "next";
import NavBar from "../components/navbar";
import TabBar from "../components/tabbar";

const Home: NextPage = ({ rides, user }: any) => {
  return (
    <>
      <NavBar {...user} />
      <TabBar rides={rides} userCode={user.station_code} />
    </>
  );
};
export async function getStaticProps() {
  const URL: any = "https://assessment.api.vweb.app";

  const ridesRes = await fetch(`${URL}/rides`);
  const rides = await ridesRes.json();

  const userRes = await fetch(`${URL}/user`);
  const user = await userRes.json();

  return {
    props: {
      rides,
      user,
    },
  };
}
export default Home;
