import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query Query {
    ships {
      image
      id
      name
      type
    }
  }
`;
