const jwt = require('jsonwebtoken');

exports.verify = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    try {
        const user = jwt.verify(token, 'secret');
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie('token');
        res.status(401).send('Unauthorized');
    }
};