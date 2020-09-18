interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

//Determines the data in a single object
interface IMessageDTO { //Data Transfer Object: A object to transfer data
    to: IMailTo;
    message: IMailMessage;
}

//Makes the class need to have the sendMail method
interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email sent! ${to.name}: ${message.subject}`);
    }
}

export default EmailService;
