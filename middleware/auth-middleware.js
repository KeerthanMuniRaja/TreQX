const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log(authHeader);
    
    const token = authHeader && authHeader.trim().split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided. Please login to continue'
        });
    }


    try {
        const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodedTokenInfo);
        req.userInfo = decodedTokenInfo;    // very very important 

    } catch (error) {
        console.log(error.message);
        
        return res.status(500).json({ 
            success: false,
            message: 'Invalid token. Please login again'
        });
    }
    next();
}

module.exports = authMiddleware;
