import { Publisher, Subjects, TicketUpdatedEvent } from '@sh4nd00/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
