import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sh4nd00/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
