import { differenceInDays, intervalToDuration, milliseconds } from 'date-fns';
import { isEmpty } from 'lodash-es';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { useBoolean, useInterval } from 'react-use';
import { z } from 'zod';

import { DateTime } from '../components';
import { selectEvents } from '../slices/events';
import { useAppSelector } from '../store';
import { formatTime } from '../utils/formatters';

const searchParamsSchema = z.object({
  date: z.coerce.date().optional(),
  title: z.string().optional(),
});

function Home() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const events = useAppSelector(selectEvents);
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
    if (!isEmpty(events)) {
      return <Navigate to="/events" />;
    }

    return <Navigate to="/new" />;
  }

  const days = differenceInDays(date, now);
  const {
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = intervalToDuration({
    end: date,
    start: now,
  });

  return (
    <div>
      {title && <h1 className="title">{title}</h1>}
      <DateTime
        fragments={[
          {
            unit: t('days'),
            value: date < now ? `-${formatTime(days)}` : formatTime(days),
          },
          {
            unit: t('hours'),
            value: formatTime(hours),
          },
          {
            unit: t('minutes'),
            value: formatTime(minutes),
          },
          {
            unit: t('seconds'),
            value: formatTime(seconds),
          },
        ]}
      />
      <p>
        <Link to="/events">All Events</Link>
      </p>
    </div>
  );
}

export default Home;
