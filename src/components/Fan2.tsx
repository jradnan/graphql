import {  Rocket } from "../graphql/__generated__/graphql";

const Fan2 = ({rocket}: {rocket:Rocket} ) => {
    const {name } = rocket;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Fan2;