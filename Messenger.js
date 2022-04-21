
module.exports = class Messenger{

    constructor(receiver){
        let nodemailer = require('nodemailer');

        let transporter = nodemailer.createTransport({
            service: 'outlook',
            auth:{
                user: 'a0074560@wits.ac.za',
                pass: 'wits.2022'
            }
        });
        
        let mailOptions = {
            from: 'Given.Mathebula1@wits.ac.za',
            to: receiver,
            subject: 'MSS Computer Literature',
            html: '<h1>Hi there,</h1><p>Hope you keeping well. You are receiving this communication because you attended a Computer Literature session at the Mathematical Science Laboratories (MSL) during the Orientation.</p><p>We are kindly asking for your help, we have lost registers that had details of some students. If you know a friend who attended a Computer Literature class at MSL but DID NOT RECEIVE this communication please ask the friend to send me an email with his/her details. Thank you</p><p>Wishing you all the best with your academics, hope you are enjoying your stay at Wits.</p><h5>Given Mathebula </h5><a href="https://www.givenng6.xyz/">https://www.givenng6.xyz/</a><h6 style = "color: gray;">Technical Lab Assistant - Mathematical Science Support</h6><h6 style = "color: gray;">TW Kambule Building, West Campus</h6>'
        }
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('falied ' + error.message);
            }else{
                console.log("Sent " + info.response);
            }
        });

    }

}



