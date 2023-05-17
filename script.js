const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/sendEmail', (req, res) => {
    const { name, email, select, message, attachmentData } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'winyciosnascimento31@gmail.com', // generated ethereal user
            pass: 'nhlsqzisunovwzri',
        }
    });


    const mailOptions = {
        from: 'Winyciosnascimento31@gmail.com',
        to: 'support@sealsupport.atlassian.net',
        subject: select,
        html: `<p>Olá meu nome é ${name}</p> 
        \n\n\n\n,
        <p>Mensagem : ${message} </p> 
        \n\n\n\n 
        <p> Email: ${email}</p> 
        `,
        attachments: [{
            path: attachmentData,
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Ocorreu um erro ao enviar o email.');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Email enviado com sucesso!');
        }
    });
});

app.listen(4002, () => {
    console.log(`Servidor rodando na porta 4002`);
});
