import nodemailer from "nodemailer";
import { EmailMessage, EmailService } from "./EmailService";

export class NodemailerEmailService implements EmailService {
  private readonly transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async send(message: EmailMessage): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: message.to,
      subject: message.subject,
      html: message.html,
    });
  }
}
