
// const mailgun = require('mailgun-js');
import mailgun from 'mailgun-js';

export default function sendMail(sender,subject,body) {
    console.log('sending mail');
    const apikey = '72da48fdc46d53018c1acbfbccd51d14-203ef6d0-daca3a8a';
    const domain = 'sandbox3548d9c5e53946edaa3ca53c9267f4ad.mailgun.org'
    const mg = mailgun({apiKey:apikey,domain:domain});
    const data = {
      from: sender,
      to: 'abdurakhimov.sardor@gmail.com',
      subject: subject,
      text: body
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
}