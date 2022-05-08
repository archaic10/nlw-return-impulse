import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adapter';
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "00fdf9292456ed",
        pass: "4ff649d607d2bf"
    }
});
export class NodeMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Vitor França <*****@gmail.com>',
        subject,
        html: body,
    });
    };
}