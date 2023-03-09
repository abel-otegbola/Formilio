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
    emailRecipients: Array,
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

const templatesSchema = new Schema({
    key: String,
    user: String,
    type: String,
    tags: Array,
    html: String
}, {
    timestamps: true
})

const Users = models.user || model("user", userSchema);
const Endpoints = models.endpoint || model("endpoint", endpointsSchema);
const Submissions = models.submission || model("submission", submissionsSchema);
const Templates = models.templates || model("templates", templatesSchema);

export { Endpoints, Submissions, Templates };
export default Users;