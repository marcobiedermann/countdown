import { formatDistanceToNow } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const searchParamsSchema = z.object({
  date: z.coerce.date(),
});

function App() {
  const [searchParams] = useSearchParams();
  const { date } = searchParamsSchema.parse(Object.fromEntries(searchParams));
  const distance = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div>
      <h1>{distance}</h1>
    </div>
  );
}

export default App;
