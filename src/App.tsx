import { formatDuration, intervalToDuration } from "date-fns";
import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useBoolean, useInterval } from "react-use";
import { z } from "zod";

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
    Object.fromEntries(searchParams)
  );

  useInterval(
    () => {
      setNow(new Date());
    },
    isRunning ? delay : null
  );

  if (!date) {
    return <Navigate to="/new" />;
  }

  const duration = intervalToDuration({
    start: now,
    end: date,
  });

  const output = formatDuration(duration);

  return (
    <div>
      {title && <h1>{title}</h1>}
      <p>{output}</p>
    </div>
  );
}

export default App;
