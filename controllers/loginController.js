const loginHandler = require("../handlers/loginHandler");


exports.login = async (req, res) => {
    const { email, password } = req.body;

    let accessToken = "";
    try {
        accessToken = await loginHandler.login(email, password);
        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(403).json({ msg: "Error - can't login", error });
    }
};
