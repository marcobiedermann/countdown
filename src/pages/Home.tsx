import { differenceInDays, intervalToDuration, milliseconds } from 'date-fns';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useBoolean, useInterval } from 'react-use';
import { z } from 'zod';
import { DateTime } from '../components';
import { formatTime } from '../utils/formatters';

const searchParamsSchema = z.object({
  date: z.coerce.date().optional(),
  title: z.string().optional(),
});

function Home() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const [now, setNow] = useState(new Date());
  const [delay] = useState(milliseconds({ seconds: 1 }));
  const [isRunning] = useBoolean(true);
  const { date, title } = searchParamsSchema.parse(Object.fromEntries(searchParams));

  useInterval(
    () => {
      setNow(new Date());
    },
    isRunning ? delay : null,
  );

  if (!date) {
    return <Navigate to="/new" />;
  }

  const days = differenceInDays(date, now);
  const {
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = intervalToDuration({
    start: now,
    end: date,
  });

  return (
    <div>
      {title && <h1 className="title">{title}</h1>}
      <DateTime
        fragments={[
          {
            value: date < now ? `-${formatTime(days)}` : formatTime(days),
            unit: t('days'),
          },
          {
            value: formatTime(hours),
            unit: t('hours'),
          },
          {
            value: formatTime(minutes),
            unit: t('minutes'),
          },
          {
            value: formatTime(seconds),
            unit: t('seconds'),
          },
        ]}
      />
    </div>
  );
}

export default Home;
