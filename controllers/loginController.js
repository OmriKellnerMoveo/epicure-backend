const loginHandler = require("../handlers/loginHandler");


exports.login = async (req, res) => {
    console.log("login controller")
    const { email, password } = req.body;
    console.log("{ email, password }", { email, password })

    let accessToken = "";
    try {
        accessToken = await loginHandler.login(email, password);
        console.log("accessToken",accessToken)
        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(403).json({ msg: "Error - can't login", error });
    }
};
