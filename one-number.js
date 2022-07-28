require('dotenv').config();

// Required Libraries for NodeJS
const express = require("express");
const app = express();
const port = 3000;

// Access the Account SID and Authorization Token from the .env file. Credentials can be found in the Twilio console.
const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

// Required modules from the Twilio library
const twilio = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const VoiceResponse = require('twilio').twiml.VoiceResponse;


// Webhook to handle incoming SMS messages to the Twilio Phone Number using Twilio Messaging Response
app.post("/that1", async (req, res) => {
    let twiml = new MessagingResponse();
    twiml.message(`Hi, thank you for visiting Twilio's booth!
Here's a promo code: ${process.env.PROMO_CODE}
And my contact info if you have any questions: kchresfield@twilio.com`)
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString()); 
});

// Function used to call customers back with a message using Twilio Voice Response
// const callBack = async () => {
    // let records = await twilio.messages.list({to: twilioNumber}); // access list of users who interacted with Twilio number
    // records.forEach(message => {

        // const twiml = new VoiceResponse()
        // twiml.say(`Hi , thank you for participating in Twilio's workshop. Be sure to keep in touch!`)
        // twilio.calls.create({
        //         to:"+14147044158",
        //     from: twilioNumber,
        //     twiml: twiml.toString()
        // })
        // .then(resp => {
        //     console.log(resp)
        //     twilio.calls(resp.sid)
        //     .update({method: 'POST', url: 'http://demo.twilio.com/docs/voice.xml'})
            
        // })
    // })
// }
// callBack();

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});