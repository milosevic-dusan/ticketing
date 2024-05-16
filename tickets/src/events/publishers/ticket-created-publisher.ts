import { Publisher, Subjects, TicketCreatedEvent } from '@sh4nd00/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
