import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String
})

const endpointsSchema = new Schema({
    user: String,
    title: String,
    key: String,
    address: String
})

const submissionsSchema = new Schema({
    user: String,
    title: String,
    data: String
})

const Users = models.user || model("user", userSchema);
const Endpoints = models.endpoint || model("endpoint", endpointsSchema);
const Submissions = models.submission || model("submission", submissionsSchema);

export { Endpoints, Submissions };
export default Users;