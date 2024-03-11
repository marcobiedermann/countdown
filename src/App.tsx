import { differenceInDays, intervalToDuration } from "date-fns";
import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useBoolean, useInterval } from "react-use";
import { z } from "zod";

function formatTime(value: number) {
  return value.toString().padStart(2, "0");
}

const searchParamsSchema = z.object({
  date: z.coerce.date().optional(),
  title: z.string().optional(),
});

function App() {
  const [searchParams] = useSearchParams();
  const [now, setNow] = useState(new Date());
  const [delay] = useState(1000);
  const [isRunning] = useBoolean(true);
  const { date, title } = searchParamsSchema.parse(
    Object.fromEntries(searchParams),
  );

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
          <span className="date-time__value">{formatTime(days)}</span>
          <span className="date-time__unit">Days</span>
        </div>
        :
        <div className="date-time__fragment">
          <span className="date-time__value">{formatTime(hours)}</span>
          <span className="date-time__unit">Hours</span>
        </div>
        :
        <div className="date-time__fragment">
          <span className="date-time__value">{formatTime(minutes)}</span>
          <span className="date-time__unit">Minutes</span>
        </div>
        :
        <div className="date-time__fragment">
          <span className="date-time__value">{formatTime(seconds)}</span>
          <span className="date-time__unit">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default App;
