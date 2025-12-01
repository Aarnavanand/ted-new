import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Registration from '@/models/Registration';
import { sendRegistrationConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, phone, role, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !role || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if email already registered
    const existingRegistration = await Registration.findOne({ email });
    if (existingRegistration) {
      return NextResponse.json(
        { error: 'This email is already registered for the event' },
        { status: 400 }
      );
    }

    // Create new registration
    const registration = new Registration({
      name,
      email,
      phone,
      role,
      message,
    });

    await registration.save();

    // Send confirmation email
    try {
      await sendRegistrationConfirmation(email, name);
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      { 
        message: 'Registration successful! Confirmation email sent.',
        registrationId: registration._id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    
    const registrations = await Registration.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    return NextResponse.json(registrations);

  } catch (error) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}