export const employesQueries = `
Employee (id: ID!): Employee
EmployeeByType (type: String!): [Employee]
Employees (offset: Int! , searchKeyWord: String): [Employee]
Count : Int
`;

export const employesQueriesResolvers = {
  Employee: async (_, {id}, { models }) =>  {
     const employee = await models.Employes.findById(id)
     return employee;
  },
  EmployeeByType: async (_, { type }, { models }) => {
   const employees = await models.Employes.find({ type });
   return employees;
  },
  Employees: async (_, { offset, searchKeyWord } , { models }) =>  {
     const regexString = `.*${searchKeyWord}.*`;
     const regex = new RegExp(regexString);
     const Employes = await models.Employes.find({ firstName: regex }).skip(offset).limit(10)
     return Employes;
  },  
  Count: async (_, {id}, { models }) =>  {
   const employee = await models.Employes.estimatedDocumentCount(id)
   return employee;
},

};