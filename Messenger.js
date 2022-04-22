
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
            from: '',
            to: receiver,
            subject: '',
            html: ''
        }
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('Falied ' + receiver + error.message);
            }else{
                console.log("Sent to " +  receiver + info.response);
            }
        });

    }

}



