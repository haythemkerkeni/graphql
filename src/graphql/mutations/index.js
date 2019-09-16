import { employesMutations, employesMutationsResolver } from './employesMutations';


export const MutationType = `
type Mutation {
  ${employesMutations}

}`;

export const mutations = Object.assign(
  employesMutationsResolver
);