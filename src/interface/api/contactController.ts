import { ContactEmail } from "@/domain/contact/ContactEmail";
import { NodemailerEmailService } from "@/infrastructure/api/email/NodemailerEmailService";
import { SendContactEmailUseCase } from "@/application/contact/SendContactEmailUseCase";

type ContactEmailInput = {
  name: string;
  email: string;
  message: string;
};

export async function contactController(body: ContactEmailInput) {
  const { name, email, message } = body;

  const contactEmail = new ContactEmail(name, email, message);
  const emailService = new NodemailerEmailService();
  const sendEmail = new SendContactEmailUseCase(emailService);

  await sendEmail.execute(contactEmail);

  return { success: true };
}
