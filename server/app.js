const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const mailSend = require('./nodeMail');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = process.env.PORT || 5000;


route.post('/mail-send', async (req, res) => {
    try {
        const { ...props } = req.body;
        await mailSend(props).catch(console.error);
        res.status(200).json({ msg: 'Mail Send'})
    } catch (e) {
        res.status(500).json({message: 'Can not send email', e})
    }
});

app.use('/api', route);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
