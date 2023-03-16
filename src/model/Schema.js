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

const messagesSchema = new Schema({
    user: String,
    message: String,
    sender: String,
    opened: Boolean
}, {
    timestamps: true
})

const portfolioSchema = new Schema({
    user: String,
    fullname: String,
    bio: String,
    img: Object,
    form: Boolean,
    links: Array,
    projects: Array,
    experience: Array,
    achievements: Array,
    skills: Array,
    endpoint: String
}, {
    timestamps: true
})

const Users = models.user || model("user", userSchema);
const Endpoints = models.endpoint || model("endpoint", endpointsSchema);
const Submissions = models.submission || model("submission", submissionsSchema);
const Messages = models.messages || model("messages", messagesSchema);
const Portfolio = models.portfolio || model("portfolio", portfolioSchema);

export { Endpoints, Submissions, Messages, Portfolio };
export default Users;