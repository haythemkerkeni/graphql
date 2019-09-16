import { ApolloServer, gql } from'apollo-server';
import type from './types'
import { queriesType, queries} from './queries'
import { MutationType, mutations} from './mutations'
import Employes from '../db/models/employes'

const typeDefs = gql`
  ${type}
  ${queriesType}
  ${MutationType}
`

export default new ApolloServer({
  typeDefs,
  resolvers: {
    Query: queries,
    Mutation: mutations,
  },
  context: () => {
    return {
      models: {
        Employes,
      },
    };
  },

});