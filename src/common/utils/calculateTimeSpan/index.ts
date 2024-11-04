import { formatDuration, intervalToDuration } from 'date-fns';

type CalculateTimeSpanParams = {
  startTime: Date | number;
  endTime: Date | number;
  shouldCalculateMs?: boolean;
};

export const calculateTimeSpan = ({ startTime, endTime, shouldCalculateMs }: CalculateTimeSpanParams): string => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const duration = intervalToDuration({ start, end });

  const formatToHumanDuration = formatDuration(duration, {
    zero: false,
    format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'],
  });

  const timeSpan = formatToHumanDuration === '' ? '0s' : formatToHumanDuration;

  if (!shouldCalculateMs) {
    return timeSpan;
  }

  const totalMilliseconds = end.getTime() - start.getTime();
  const milliseconds = totalMilliseconds % 1000;

  if (formatToHumanDuration === '') {
    return `${milliseconds.toString()}ms`;
  }

  return milliseconds > 0 ? `${timeSpan} ${milliseconds.toString()}ms` : timeSpan;
};
