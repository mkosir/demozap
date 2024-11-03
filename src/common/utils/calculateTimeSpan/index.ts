import { formatDuration, intervalToDuration } from 'date-fns';

type CalculateTimeSpanParams = {
  startTime: Date | number;
  endTime: Date | number;
};

export const calculateTimeSpan = ({ startTime, endTime }: CalculateTimeSpanParams): string => {
  const duration = intervalToDuration({ start: new Date(startTime), end: new Date(endTime) });

  const formatToHumanDuration = formatDuration(duration, {
    zero: false,
    format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'],
  });

  return formatToHumanDuration === '' ? '0s' : formatToHumanDuration;
};
