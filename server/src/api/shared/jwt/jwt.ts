import jwt from 'jsonwebtoken';

const SECRET_KEY = 'secret_some_key132';

export const generateJwt = (id: number, email: string, role: string): string => {
  return jwt.sign(
    {id, email, role}, SECRET_KEY, {expiresIn: '24h'}
  )
}

export const verifyJwt = (token: string): jwt.JwtPayload | string => {
  return jwt.verify(token, SECRET_KEY);
}