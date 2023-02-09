export const validateSignup = ({ fullname, email, password, cpassword }) => {
    let error = {}
    if(fullname.length < 5) {
        error.error = "Fullname should be more than 4 characters"
    }
    else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        error.error = "Email is invalid"
    }
    else if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password))) {
        error.error = "Password should contain at least one uppercase, one lowercase, a numeric digit and should be more than 6 characters"
    }
    else if(password !== cpassword) {
        error.error = "Passwords do not match"
    }
    return error;
}