const apiController = require('express').Router();
const nodeMailer = require('nodemailer');

const transport = {
    host: process.env.host,
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
};

const transporter = nodeMailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) { return console.log(error); }
    console.log('Server is ready to take messages');
});

apiController.post('/contact', (req, res) => {
    const {
        name,
        email,
        message,
    } = req.body;
    transporter.sendMail({
        from: email,
        to: process.env.user,
        subject: name,
        text: message,
    });
    res.status(200).json({
        error: false,
        message: 'Email has been sent!'
    });
});

module.exports = apiController;