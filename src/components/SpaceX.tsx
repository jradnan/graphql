import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/space";
import Space from "./Space";

const SpaceX = () => {
  const { loading, error, data } = useQuery(GET_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.ships);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
      {data.ships.map((ship) => (
        <Space key={ship.id} ship={ship}></Space>
      ))}
    </div>
  );
};

export default SpaceX;
