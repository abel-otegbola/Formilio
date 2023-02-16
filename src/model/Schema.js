import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String
})

const endpointsSchema = new Schema({
    user: String,
    title: String,
    address: String
})

const Users = models.user || model("user", userSchema);
const Endpoints = models.endpoint || model("endpoint", endpointsSchema);

export { Endpoints };
export default Users;