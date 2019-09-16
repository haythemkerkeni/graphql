export const employesMutations = `
addEmployee (employeeInput :EmployeeInput!): Employee
deleteEmployee(id: ID!): Boolean
updateEmployee(id: ID!, employee: EmployeeInput!): Employee
`;

export const employesMutationsResolver = {
  addEmployee: async (_, {  employeeInput }, { models }) =>  {
    const employee = new models.Employes(employeeInput);
    employee.save();
    return employee;
  },
  deleteEmployee: async (_, { id }, { models }) =>  {
    const employee = await models.Employes.findById(id);
    employee.remove();
    return true;
  },
  updateEmployee: async (_, { id, employee } , { models }) =>  {
    const Employes = await models.Employes.findByIdAndUpdate(id, employee);
    return Employes;
  },
};
