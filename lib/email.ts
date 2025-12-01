import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export const sendRegistrationConfirmation = async (email: string, name: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'TEDx SRMIST NCR Ghaziabad - Registration Confirmed!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #E62B1E; color: white; padding: 20px; text-align: center;">
          <h1>TEDx SRMIST NCR Ghaziabad</h1>
          <p style="font-size: 18px;">Ideas Worth Spreading</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #E62B1E;">Thank You for Registering, ${name}!</h2>
          
          <p>We're thrilled to confirm your registration for TEDx SRMIST NCR Ghaziabad. Get ready for an inspiring day of groundbreaking ideas and exceptional speakers.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333;">Event Details:</h3>
            <p><strong>Date:</strong> March 15, 2025</p>
            <p><strong>Time:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Venue:</strong> SRMIST NCR Campus, Ghaziabad</p>
          </div>
          
          <p>Please keep this email as your registration confirmation. You'll receive additional details about the event as we get closer to the date.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="#" style="background: #E62B1E; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px;">View Event Details</a>
          </div>
          
          <p>If you have any questions, feel free to reach out to us at tedx@srmist.edu.in</p>
          
          <p style="margin-top: 30px;">
            Looking forward to seeing you there!<br>
            <strong>TEDx SRMIST NCR Ghaziabad Team</strong>
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendContactNotification = async (name: string, email: string, subject: string, message: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ORGANIZER_EMAIL || process.env.EMAIL_USER,
    subject: `TEDx Contact Form: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #E62B1E; color: white; padding: 20px; text-align: center;">
          <h1>New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #E62B1E;">Contact Details:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p>${message}</p>
          </div>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};