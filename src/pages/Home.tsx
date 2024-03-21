import { differenceInDays, intervalToDuration } from 'date-fns';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useBoolean, useInterval } from 'react-use';
import { z } from 'zod';

function formatTime(value: number) {
  return Math.abs(value).toString().padStart(2, '0');
}

const searchParamsSchema = z.object({
  date: z.coerce.date().optional(),
  title: z.string().optional(),
});

function Home() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const [now, setNow] = useState(new Date());
  const [delay] = useState(1000);
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
      <div className="date-time">
        <div className="date-time__fragment">
          <span className="date-time__value">
            {date < now && '-'}
            {formatTime(days)}
          </span>
          <span className="date-time__unit">{t('days')}</span>
        </div>
        <span className="date-time__separator">:</span>
        <div className="date-time__fragment">
          <span className="date-time__value">{formatTime(hours)}</span>
          <span className="date-time__unit">{t('hours')}</span>
        </div>
        <span className="date-time__separator">:</span>
        <div className="date-time__fragment">
          <span className="date-time__value">{formatTime(minutes)}</span>
          <span className="date-time__unit">{t('minutes')}</span>
        </div>
        <span className="date-time__separator">:</span>
        <div className="date-time__fragment">
          <span className="date-time__value">{formatTime(seconds)}</span>
          <span className="date-time__unit">{t('seconds')}</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
