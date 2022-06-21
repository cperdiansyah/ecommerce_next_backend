import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  });
};
export default generateToken;
