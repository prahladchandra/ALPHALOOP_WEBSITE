// // pages/api/send-email.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { name, email, message } = req.body;

//   // Create a transporter using your email service provider's settings
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   // Set up email options
//   const mailOptions = {
//     from: 'test@mail.com',
//     to: 'alphaloopprahladchandra@gmail.com',
//     subject: 'New Form Submission',
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }


// // pages/api/send-email.js
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { name, email, message } = req.body;

//   // Create a transporter using your email service provider's settings
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'alphaloopprahladchandra@gmail.com',
//       pass: 'Alphaloop@102030',
//     },
//   });

//   // Set up email options
//   const mailOptions = {
//     from: 'test@mail.com',
//     to: 'alphaloopprahladchandra@gmail.com',
//     subject: 'New Form Submission',
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }



// import nodemailer from 'nodemailer';
// import cors from 'cors';


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'alphaloopprahladchandra@gmail.com',
//     pass: 'Alphaloop@102030',
//   },
// });

// const corsMiddleware = cors();
// const handler = async (req, res) => {
//  await corsMiddleware(req, res);
//   if (req.method !== 'POST') {
//     return res.status(405).end(); // Method Not Allowed
//   }

//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: 'alphaloopprahladchandra@gmail.com',
//     to: 'chandraprahlad9@gmail.com',
//     subject: 'New Contact Form Submission',
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ message: 'Email sent successfully.' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
//   }
// };

// export const config = {
//   api: {
//     bodyParser:false, // Next.js handles body parsing by default
//   },
// };

// export default handler;
