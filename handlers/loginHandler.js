const jwt =require("jsonwebtoken");
const bcrypt =require("bcrypt");
const Users =require('../models/user');


exports.login = async (
    email,
    password
)=> {
    const user = await Users.findOne({ email });
    if (!user) {
        throw (`No user found with email: ${email}`);
    }

    const hashedPassword = user.password;

    //check password
    if (!(await bcrypt.compare(password, hashedPassword))) {
        throw ("Password incorrect ,Please try again");
    }
    //send json as a response
    const accessToken = jwt.sign(
        { email },
        process.env.TOKEN_SECRET,
        { expiresIn: "10m" },
);
    return accessToken;
};
