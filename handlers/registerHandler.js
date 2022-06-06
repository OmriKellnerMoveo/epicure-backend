const bcrypt =require("bcrypt");
const Users = require("../models/user")

exports.register = async (
    email,
    password
) => {
    //// check if email already in db
    const exists = await Users.exists({ email });
    if (exists) {
        throw (
            `email ${email} already exists`
        );
    }
    //// hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //// add email and hashed password to db
    await Users.create({ email, password: hashedPassword });
};
