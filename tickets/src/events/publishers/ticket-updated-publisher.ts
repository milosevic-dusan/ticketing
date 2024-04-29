import { Publisher, Subjects, TicketUpdatedEvent } from '@sh4nd00/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
