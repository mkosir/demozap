import { calculateTimeSpan } from '.';

describe('utils', () => {
  describe('calculateTimeSpan', () => {
    test('should calculate time span, when start and end time is passed', () => {
      const startTime = new Date('2021-01-01T00:00:00.000Z');
      const endTime = new Date('2021-01-01T00:07:05.000Z');

      expect(calculateTimeSpan({ startTime, endTime })).toBe('7 minutes 5 seconds');
    });

    test('should calculate time span as 0 seconds, when start and end time are the same', () => {
      const startTime = new Date('2021-01-01T00:00:00.000Z');
      const endTime = new Date('2021-01-01T00:00:00.000Z');

      expect(calculateTimeSpan({ startTime, endTime })).toBe('0s');
    });
  });
});
