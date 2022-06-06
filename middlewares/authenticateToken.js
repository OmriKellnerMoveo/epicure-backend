const jwt =require("jsonwebtoken");

exports.authenticateToken = (
    req,
    res,
    next
) => {
    const authHeader = req.headers["authorization"];
    const accessToken  =
        authHeader && authHeader?.split(" ")[1];//second arg = token
    if (accessToken == null) return res.sendStatus(401);
    jwt.verify(
        accessToken,
        process.env.TOKEN_SECRET,
        (err, email) => {
            if (err) {
                console.log(authHeader);
                return res.sendStatus(403);
            }
            req.body.email = email;
            next();
        }
    );
};
