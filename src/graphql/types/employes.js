const employesType = `

input EmployeeInput {
  email: String
  cin: Float
  firstName: String
  lastName: String
  type: String
}

type Employee {
  id: ID
  email: String
  cin: Float
  firstName: String
  lastName: String
  type: String
}

`
export default employesType;