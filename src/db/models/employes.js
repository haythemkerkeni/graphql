import mongoose from 'mongoose';

const employeesSchema = new mongoose.Schema(
   {
       cin: Number,
       firstName: String,
       lastName: String,
       email: String,
       type: { type: String, enum: ['employee', 'administrator','manager'], default: 'employee' },
   },
   {
       collection: 'employees',
   },
);
employeesSchema.methods.toJSON = function employeesToJSON() {
   return {
       id: this._id,
       cin: this.cin,
       email: this.email,
       firstName: this.firstName,
       lastName: this.lastName,
       type: this.type,
   };
};
export default mongoose.model('employees', employeesSchema);