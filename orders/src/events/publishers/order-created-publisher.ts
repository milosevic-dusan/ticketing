import { Publisher, OrderCreatedEvent, Subjects } from '@sh4nd00/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
