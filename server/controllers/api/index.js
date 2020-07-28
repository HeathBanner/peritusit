const apiController = require('express').Router();
const nodeMailer = require('nodemailer');

try {
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
} catch (error) {
    console.log(error);
}

apiController.post('/contact', (req, res) => {
    try {
        const { name, email, message } = req.body;
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
    } catch (error) {
        res.status(500).json({
            error: false,
            message: 'Something went wrong :('
        });
    }
});

module.exports = apiController;