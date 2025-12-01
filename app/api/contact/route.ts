import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await contact.save();

    // Send notification email to organizers
    try {
      await sendContactNotification(name, email, subject, message);
    } catch (emailError) {
      console.error('Error sending notification email:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      { message: 'Message sent successfully! We\'ll get back to you soon.' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}