const jwt =require("jsonwebtoken");
const bcrypt =require("bcrypt");
const Users =require('../models/user');


exports.login = async (
    email,
    password
)=> {
    console.log("email",email)
    console.log("password",password)
    const user = await Users.findOne({ email });
    console.log("user",user)
    if (!user) {
        throw (`No user found with email: ${email}`);
    }

    const hashedPassword = user.password;
    console.log("hashedPassword",hashedPassword)

    //check password
    if (!(await bcrypt.compare(password, hashedPassword))) {
        throw ("Password incorrect ,Please try again");
    }
    console.log("process.env.TOKEN_SECRET",process.env.TOKEN_SECRET)
    //send json as a response
    const accessToken = jwt.sign(
        { email },
        process.env.TOKEN_SECRET,
        { expiresIn: "10m" },
);
    return accessToken;
};
