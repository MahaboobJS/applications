import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import User from '../../../../models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    console.log('Starting signup process...');
    
    // Handle CORS
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');

    const { username, email, password } = await request.json();
    console.log('Received signup data:', { username, email, password: '***' });

    // Validate input
    if (!username || !email || !password) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Username, email, and password are required' },
        { status: 400, headers }
      );
    }

    console.log('Connecting to database...');
    await connectDB();
    console.log('Database connected successfully');

    // Check if user already exists
    console.log('Checking for existing user...');
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      console.log('User already exists:', { 
        existingEmail: existingUser.email, 
        existingUsername: existingUser.username,
        requestedEmail: email,
        requestedUsername: username
      });
      return NextResponse.json(
        { error: 'User with this email or username already exists' },
        { status: 400, headers }
      );
    }

    console.log('No existing user found, creating new user...');
    // Create new user
    const user = new User({
      username,
      email,
      password,
    });

    console.log('Saving user to database...');
    await user.save();
    console.log('User saved successfully:', { userId: user._id, username: user.username, email: user.email });

    // Generate JWT token
    console.log('Generating JWT token...');
    const token = jwt.sign(
      { 
        userId: user._id,
        username: user.username,
        email: user.email 
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log('Signup completed successfully');
    // Return user data (password will be excluded due to toJSON method)
    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    }, { status: 201, headers });

  } catch (error) {
    console.error('Signup error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    });
    
    // Check if it's a MongoDB duplicate key error
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json(
        { error: 'User with this email or username already exists' },
        { status: 400, headers: new Headers({
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        })}
      );
    }
    
    // Check if it's a validation error
    if (error instanceof Error && error.message.includes('validation failed')) {
      return NextResponse.json(
        { error: error.message },
        { status: 400, headers: new Headers({
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        })}
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500, headers: new Headers({
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      })}
    );
  }
}
