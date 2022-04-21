
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
            subject: 'Node Http',
            text: 'App modified'
        }
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('falied ' + error.message);
            }else{
                console.log(info.response);
            }
        });

    }

}



