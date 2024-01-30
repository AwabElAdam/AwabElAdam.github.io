const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5500; // Set your desired port

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.use(express.static('public'));

// POST endpoint for handling email sending
app.post('/send-email', (req, res) => {
  const { name, email, phone, privacyPolicy, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid } = req.body;

  // Replace the following with your email configuration
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'work.awab@gmail.com',
      pass: 'akzpqkmpcmrtjpqj'
    }
  });

  const mailOptions = {
    from: 'work.awab@gmail.com',
    to: 'a.awab@saphiredent.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\n
          Email: ${email}\n
          utm_source: ${utm_source}\n
          Phone: ${phone}`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
    </head>
    <body>
      <table>
        <tr>
          <th>Name</th>
          <td>${name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>${phone}</td>
        </tr>
        <tr>
          <th>utm_source</th>
          <td>${utm_source}</td>
        </tr>
        <tr>
          <th>utm_medium</th>
          <td>${utm_medium}</td>
        </tr>
        <tr>
          <th>utm_campaign</th>
          <td>${utm_campaign}</td>
        </tr>
        <tr>
          <th>utm_term</th>
          <td>${utm_term}</td>
        </tr>
        <tr>
          <th>utm_content</th>
          <td>${utm_content}</td>
        </tr>
        <tr>
          <th>gclid</th>
          <td>${gclid}</td>
        </tr>
      </table>
    </body>
    </html>
  `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/send-email', (req, res) => {
  res.send('mail server');
});