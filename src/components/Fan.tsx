import { useQuery } from "@apollo/client";
import { GET_FAN } from "../graphql/space";
import Fan2 from "./Fan2";
import { Rocket } from "../graphql/__generated__/graphql";

const Fan = () => {
    const {loading,error, data} = useQuery(GET_FAN);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <div>
            <h1>this is fan</h1>
            {
                data?.rockets?.map(rocket => {
                    return <Fan2 rocket={rocket as Rocket}></Fan2>
                })
            }
        </div>
    );
};

export default Fan;