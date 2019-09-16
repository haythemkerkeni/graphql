import {employesQueries ,employesQueriesResolvers} from './employesQueries'

export const queriesType = `
type Query {
  ${employesQueries}

}`;
export const queries = Object.assign(
  employesQueriesResolvers,
);  