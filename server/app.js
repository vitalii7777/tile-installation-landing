const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mailSend = require('./nodeMail');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = process.env.PORT || 5000;


route.post('/mail-send', async (req, res) => {
    try {
        const { form } = req.body;
        console.log(form);
        await mailSend(form).catch(console.error);
        res.status(200).json({ msg: 'Mail Send'})
    } catch (e) {
        res.status(500).json({message: 'Can not send email', e})
    }
});

app.use('/api', route);

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, '../client', 'build')));
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    });
}


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
