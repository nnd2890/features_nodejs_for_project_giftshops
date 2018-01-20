const express =  require('express');
const bodyParser =  require('body-parser');
const exhbs =  require('express-handlebars');
const path =  require('path');
const nodemailer =  require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=> {
   res.render('contact');
});

app.post('/send', (req, res)=> {
    const output = 
        '<p>You have a new contact request</p>'
        + '<h3>Contact details</h3>'
        + '<ul>'
            + '<li>Name:' + req.body.name + '<li>'
            + '<li>Email:' + req.body.email +'<li>'
            + '<li>Phone:' + req.body.phone + '<li>'
        + '<ul>'
        + '<h3>Message</h3>'
        + '<p>' + req.body.message + '</p>'
        ;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 'nnd2890test@gmail.com',
                pass: '1234test'
            }
    });

    const mailOptions = {
        from: req.body.email, // sender address
        to: 'to@gmail.com', // list of receivers
        subject: 'Nodemailer sent', // Subject line
        html: output// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
        res.render('contact',{message: 'Email has been sent.'});
    });
});
 


app.listen(3000, () => console.log('Server started...'));