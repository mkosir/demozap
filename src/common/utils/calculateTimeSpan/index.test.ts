import { calculateTimeSpan } from '.';

describe('utils', () => {
  describe('calculateTimeSpan', () => {
    test('should calculate time span, wTTTTTTTTTTThen start and end time is passed', () => {
      const startTime = new Date('2024-01-01T00:00:00.000Z');
      const endTime = new Date('2024-01-01T00:07:05.000Z');

      expect(calculateTimeSpan({ startTime, endTime })).toBe('7 minutes 5 seconds');
    });

    test('should calculate time span as 0 seconds, when start and end time are the same', () => {
      const startTime = new Date('2024-01-01T00:00:00.000Z');
      const endTime = new Date('2024-01-01T00:00:00.000Z');

      expect(calculateTimeSpan({ startTime, endTime })).toBe('0s');
    });

    test('should calculate time span as milliseconds, when start and end time are less then a second', () => {
      const startTime = new Date('2024-01-01T00:00:00.000Z');
      const endTime = new Date('2024-01-01T00:00:00.350Z');

      expect(calculateTimeSpan({ startTime, endTime, shouldCalculateMs: true })).toBe('350ms');
    });

    test('should calculate time span with appended milliseconds, when start and end time are more then a second', () => {
      const startTime = new Date('2024-01-01T00:00:00.000Z');
      const endTime = new Date('2024-01-01T00:00:06.350Z');

      expect(calculateTimeSpan({ startTime, endTime, shouldCalculateMs: true })).toBe('6 seconds 350ms');
    });

    test('should calculate time span without appended milliseconds, when milliseconds difference is 0', () => {
      const startTime = new Date('2024-01-01T00:00:00.350Z');
      const endTime = new Date('2024-01-01T00:00:06.350Z');

      expect(calculateTimeSpan({ startTime, endTime, shouldCalculateMs: true })).toBe('6 seconds');
    });
  });
});
