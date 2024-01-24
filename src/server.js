// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a transporter using your email service provider's settings
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'himanshujoshi@alphaloop.net',
//       pass: 'qjyi gvhq omso cedw',
//     },
//   });

//   // Set up email options
//   const mailOptions = {
//     from: 'test@gmail.com',
//     to: 'himanshujoshi@alphaloop.net',
//     subject: 'New Form Submission',
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
