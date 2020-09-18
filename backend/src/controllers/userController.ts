import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Anderson', email: 'anderson@email.com'},
];

export default {
    //Does not recognize the type of the req and res parameters, because it has not imported the express (the express methods make the type inference)
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    //Another example where it is necessary to declare the types manually, in this case an object with data:
    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'Anderson', email: 'anderson@email.com'},
            message: { subject: 'Welcome to The Matrix!', body: 'It looks like you chose the red pill' }
        });

        return res.send();
    }
};