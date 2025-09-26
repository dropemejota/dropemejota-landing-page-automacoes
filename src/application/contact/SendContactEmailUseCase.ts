import { ContactEmail } from "@/domain/contact/ContactEmail";
import { EmailService } from "@/infrastructure/api/email/EmailService";

export class SendContactEmailUseCase {
  constructor(private readonly emailService: EmailService) {}

  async execute(message: ContactEmail): Promise<void> {
    await this.emailService.send({
      to: process.env.SMTP_USER!,
      subject: "📩 Novo contato do site",
      html: `
        <h3>Novo contato</h3>
        <p><b>Nome:</b> ${message.name}</p>
        <p><b>Email:</b> ${message.email}</p>
        <p><b>Mensagem:</b> ${message.message}</p>
      `,
    });
  }
}
