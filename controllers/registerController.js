
const registerHandler =require("../handlers/registerHandler");

exports.register = async (req, res) => {
    const { email, password } = req.body;
    try {
        await registerHandler.register(email, password);
        res.status(201).json({ msg: "Created new user!" });
    } catch (error) {
        res.status(400).json({ msg: "error registring new user", error });
    }
};
