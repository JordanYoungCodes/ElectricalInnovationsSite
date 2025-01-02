const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email
    pass: process.env.EMAIL_PASS, // Replace with your email password
  },
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
// Email route
app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message || !phone) {
      return res.status(400).send('All fields are required.');
    }
  
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `This is a message from ${name}.
      Phone number: ${phone}
      Email: ${email}
      message: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Failed to send email.');
      }
      res.status(200).send('Email sent successfully.');
    });
  });
  
// Start server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
