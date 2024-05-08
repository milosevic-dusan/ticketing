import { Subjects, Publisher, OrderCancelledEvent } from '@sh4nd00/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
