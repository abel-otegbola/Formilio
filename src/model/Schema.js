import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String
}, {
    timestamps: true
})

const endpointsSchema = new Schema({
    user: String,
    title: String,
    key: String,
    autoRespond: String,
    thankYou: String,
    address: String
}, {
    timestamps: true
})

const submissionsSchema = new Schema({
    key: String,
    user: String,
    data: String
}, {
    timestamps: true
})

const notificationsSchema = new Schema({
    user: String,
    message: String,
}, {
    timestamps: true
})

const Users = models.user || model("user", userSchema);
const Endpoints = models.endpoint || model("endpoint", endpointsSchema);
const Submissions = models.submission || model("submission", submissionsSchema);
const Notifications = models.notifications || model("notification", notificationsSchema);

export { Endpoints, Submissions, Notifications };
export default Users;