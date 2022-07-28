// Required Libraries for NodeJS
const sgMail = require('@sendgrid/mail')
require('dotenv').config();

// Required file
const jsonData = require('./email.json')

// Required module from the Twilio library
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

for (let name in jsonData){
  let text = `Hi again ${name}, here's our workshop resources 
  incase you didn't want to type it in earlier ${process.env.WORKSHOP_LINK}`
  // console.log(jsonData[name])
  const msg = {
    to: jsonData[name].trim(),
    from: 'kchresfield@kctalksandcodes.com',
    subject: 'Thank you for visiting our workshop!',
    text: "Hi again , here's our workshop resources incase you didn't want to type it in earlier twil.io/thatconf-22",
  }

  sgMail
    .send(msg)
    .then(() => console.log("another email sent!"))
    .catch(err => console.log(err));

}
