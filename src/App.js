import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import LaunchCard from "./LaunchCard";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      links {
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(data);

  return (
    <div>
      <h1>SpaceX Launches</h1>
      {data.launchesPast.map((launch) => (
        <LaunchCard
          key={launch.id}
          name={launch.mission_name}
          date={launch.launch_date_local}
          links={launch.links.video_link}
          rocket_name={launch.rocket.rocket_name}
        />
      ))}
    </div>
  );
}

export default App;
