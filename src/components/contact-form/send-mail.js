
// const mailgun = require('mailgun-js');
import mailgun from 'mailgun-js';

export default function sendMail(sender,subject,body) {
    console.log('sending mail');
    const k = 'your api key from mailgun';
    const domain = 'domain from mailgun';
    const mg = mailgun({apiKey:k,domain:domain});
    const data = {
      from: sender,
      to: 'xxx@mail.com',
      subject: subject,
      text: body
    };
    // uncomment these lines for sending mail
    // mg.messages().send(data, function (error, body) {
    //   console.log(body);
    // });
}