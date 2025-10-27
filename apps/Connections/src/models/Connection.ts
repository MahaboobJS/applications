import mongoose, { Schema, Document } from 'mongoose';

export interface IConnection extends Document {
  name: string;
  sourceType: string;
  destinationType: string;
  sourceConfig: Record<string, any>;
  destinationConfig?: Record<string, any>;
  frequency: string;
  tags: string[];
  lastSync?: Date;
  enabled: boolean;
  status: 'active' | 'inactive' | 'failed' | 'pending';
  userId: mongoose.Types.ObjectId;
}

const ConnectionSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    sourceType: { type: String, required: true, trim: true },
    destinationType: { type: String, required: true, trim: true },
    sourceConfig: { type: Object, required: true },
    destinationConfig: { type: Object },
    frequency: { type: String, default: 'Manual' },
    tags: [{ type: String }],
    lastSync: { type: Date },
    enabled: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ['active', 'inactive', 'failed', 'pending'],
      default: 'inactive',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Connection ||
               mongoose.model<IConnection>('Connection', ConnectionSchema);