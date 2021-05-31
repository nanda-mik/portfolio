const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
      api_key: process.env.API_KEY
    }
  }));


exports.getportFolio = (req, res, next) => {
    res.render('index');
};

exports.postSubmit = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;
    res.redirect('/');
    return transporter.sendMail({
        to: 'nandamikushubha@gmail.com',
        from: 'b518045@iiit-bh.ac.in',
        subject: 'Message from portfolio.',
        html: `
            <h2>${subject}</h2>
            <h4>${name}</h4><h4>${email}</h4><h4>${phone}</h4>
            <p>${message}</p>
        `
    })
};