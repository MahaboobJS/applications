import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface AuthUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export async function verifyToken(request: NextRequest): Promise<AuthUser | null> {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return null;
    }

    return {
      _id: (user._id as any).toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    };
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export function generateToken(user: IUser): string {
  return jwt.sign(
    { userId: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}