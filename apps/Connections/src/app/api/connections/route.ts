import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '../../../lib/mongodb';
import Connection from '../../../models/Connection';

// GET all connections for a user
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // For now, we'll get all connections. In a real app, you'd get userId from JWT token
    const connections = await Connection.find({})
      .sort({ createdAt: -1 });

    return NextResponse.json({ connections }, { status: 200 });

  } catch (error) {
    console.error('Get connections error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch connections' },
      { status: 500 }
    );
  }
}

// POST create a new connection
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const {
      name,
      sourceType,
      destinationType,
      sourceConfig,
      destinationConfig,
      frequency,
      tags,
      userId
    } = await request.json();

    // Validate required fields
    if (!name || !sourceType || !sourceConfig) {
      return NextResponse.json(
        { error: 'Name, source type, and source config are required' },
        { status: 400 }
      );
    }

    // Create new connection
    const connection = new Connection({
      name,
      sourceType,
      destinationType: destinationType || sourceType, // Default to same as source
      sourceConfig,
      destinationConfig,
      frequency: frequency || 'Manual',
      tags: tags || [],
      userId: userId || new mongoose.Types.ObjectId(), // For now, create a dummy user ID
      status: 'inactive'
    });

    await connection.save();

    return NextResponse.json(
      {
        message: 'Connection created successfully',
        connection
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Create connection error:', error);
    return NextResponse.json(
      { error: 'Failed to create connection' },
      { status: 500 }
    );
  }
}