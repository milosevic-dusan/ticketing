import { Publisher, Subjects, TicketCreatedEvent } from '@sh4nd00/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
