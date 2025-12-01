import mongoose from 'mongoose';

export interface IRegistration {
  name: string;
  email: string;
  phone: string;
  role: 'Student' | 'Faculty' | 'Guest' | 'Professional';
  message: string;
  createdAt?: Date;
}

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['Student', 'Faculty', 'Guest', 'Professional'],
  },
  message: {
    type: String,
    required: [true, 'Please tell us why you want to attend'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Registration = mongoose.models.Registration || mongoose.model<IRegistration>('Registration', RegistrationSchema);
export default Registration;