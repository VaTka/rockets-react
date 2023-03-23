import {gql} from "@apollo/client";

export const ROCKETS_QUERY = gql`
    query{
     rockets {
       id
       description
       name
     }
    }
`
