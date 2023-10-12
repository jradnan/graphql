import { gql } from "./__generated__";

export const GET_DATA = gql(`
  query Adnan {
    ships {
      image
      id
      name
      type
    }
  }
`);

export const GET_FAN = gql(
  `query Fan {
    rockets {
      id
      name
    }
  }
  `
);
