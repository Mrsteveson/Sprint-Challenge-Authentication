const jwt = require('jsonwebtoken');

const jwtKey =
  process.env.JWT_SECRET || 'added a secret!';

// quickly see what this file exports
module.exports = {
  authenticate, generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '6h',
  };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, options)
};



// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}
