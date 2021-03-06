
module.exports = class Messenger{

    constructor(receiver){
        let nodemailer = require('nodemailer');

        let transporter = nodemailer.createTransport({
            service: '', // e.g gmail, outlook
            auth:{
                user: '',
                pass: ''
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



