const nodemailer = require("nodemailer");

const mailSend  = async (props) => {
    const { message } = props;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'vitaliistorage@gmail.com', // generated ethereal user
            pass: 'Vitalik2651165322', // generated ethereal password
        },
    });
    const info = await transporter.sendMail({
        from: 'From Site', // sender address
        to: "qatest.apiko@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: message, // plain text body
        // html: "<b>ASD`</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

};

module.exports = mailSend;
