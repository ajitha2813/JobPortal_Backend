const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    if(req.headers.authorization === undefined) {
        return res.status(401).json({ 
            message: 'Unauthorized request' 
        });
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ 
            message: 'Unauthorized request' 
        });
    }

    try {
        const decoded = jwt.verify(token, "JOBPORTAL");
        
        next();
    } catch (error) {
        return res.status(401).json({ 
            isSuccess: false,
            message: 'Token expired' 
        });
    }   

}


module.exports = { verifyToken }